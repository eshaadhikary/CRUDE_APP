const express= require('express');
// const app= express()----this statement will create a new app but I dont want it
const route= express.Router()
// This method allows us to create diff router in a single file 

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */

route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET /
 */

route.get('/add_user',services.add_user);

/**
 * @description for update users
 * @method GET /update-user
 */

route.get('/update-user',services.update_user);



// route.get('/',(req,res)=>{
//     // res.send("CRUD APPLICATIONS");
//     res.render('index');
// })

// route.get('/add-user',(req,res)=>{
//     // res.send("CRUD APPLICATIONS");
//     res.render('add_user');
// })

// route.get('/update-user',(req,res)=>{
//     // res.send("CRUD APPLICATIONS");
//     res.render('update_user');
// })

module.exports = route