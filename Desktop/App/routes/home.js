const express = require('express');
const homeRoute = express.Router();
const homeData = require('../Modals/homepage'); 

homeRoute.get('/', async (req, res) => {
  try {
    const data = await homeData.find({});
    console.log(data);
    res.render('home', { data }); // Assuming you are passing the retrieved data to your template engine for rendering
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = homeRoute;
