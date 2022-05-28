const express =require('express');
const route =express.Router();
const services =require('../services/render');
const controller =require('../controller/controller');
route.get('/',services.homeRoutes);

route.get('/add_employee',services.add_employee);

route.get('/update_employee',services.update_employee);

// create API
route.post('/api/employees',controller.create);
route.get('/api/employees',controller.find);
route.put('/api/employees/:id',controller.update);
route.delete('/api/employees/:id',controller.delete);
module.exports=route;