var employeedb =require('../model/model');

//create new employee
exports.create = (req,res)=>{
//first should validate
    if(!req.body){
        res.status(400).send({message:"content cant be empty!"});
        return;
    }
const employee = new employeedb({
    name:req.body.name,
    birth_date:req.body.birth_date,
    gender:req.body.gender,
    salary:req.body.salary
})
// insert data to database
employee
.save(employee)
.then(data=>{
    //res.send(data)
    res.redirect('/add_employee')
})
.catch(err=>{
    res.status(500).send({
        message:err.message || "some thing error while creating new employee"
    });
});
}

//retrive and return employee

exports.find =(req,res)=>{
    if(req.query.id)
    {
const id = req.query.id;
employeedb.findById(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:'not found employee with id '+ id})
    }else{
        res.send(data)
    }
})
.catch(err =>{
    res.status(500).send({message:'error retriving employee with id '+ id})
})
    }
    else{
        employeedb.find()
        .then(employee =>{
            res.send(employee)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "error happend while retriving employee info"})
        })
    }

}

//update
exports.update =(req,res)=>{
if(!req.body){
    return res
    .status(400)
    .send({message:"Information to be updated can't be empty"});

}
const id =req.params.id;
employeedb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then(data=>{
    if(!data){
    res.status(404).send({message:'cannot update employee with ${id}. maybe employee not exist'});
}else{
    res.send(data)
   
}
})
.catch(err=>{
    res.status(500).send({message:'error while update employee information'})
})
}

//delete
exports.delete =(req,res)=>{
const id = req.params.id;

employeedb.findByIdAndDelete(id)
.then(data=>{
    if(!data){
    res.status(404).send({message:'cannot delete with employee ${id}. maybe employee id is invalid'})
}else{
    res.send({
        message:'employee was deleted successfully!'
    })
}})
.catch(err =>{
    res.status(500).send({
        message:"could not delet employee with id of " + id
    });
});
}