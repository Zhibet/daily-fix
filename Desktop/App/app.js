const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bussiness');

const homeRoute = require('./routes/home')

app.use(express.static('public'))
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs'); 

app.use('/',homeRoute)

const port = 3000;
app.listen(port,()=>{
    console.log('live on port 3000')
})
