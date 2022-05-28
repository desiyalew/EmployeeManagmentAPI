const mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        birth_date:{
            type:Date,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        }
    }
)

const employeesdb = mongoose.model('employeedb',schema);
module.exports = employeesdb