const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bussiness');

const navbarShema = new mongoose.Schema({
   
});

const navbar = mongoose.model('navbar', navbarShema);

module.exports = navbar; 