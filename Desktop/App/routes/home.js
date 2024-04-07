const express = require('express');
const homeRoute = express.Router();

homeRoute.get('/',(req,res)=>{
    const name = 'citlali'
    res.render('home',{name})
})

module.exports = homeRoute;