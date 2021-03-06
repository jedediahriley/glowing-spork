// Dependencies
const express = require('express');
const APP = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const DB = mongoose.connection
require('dotenv').config()

// Port
const PORT = process.env.PORT || 3000;

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notes';

// Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });

// Opening the connection to mongo
DB.on('open' , ()=>{});

// middleware
APP.use(express.urlencoded({extended: true}))
APP.use(methodOverride('_method'))
//APP.get('/', (req, res) => {res.redirect('/notes')})
//APP.use('/equipment', equipController)
APP.use(express.static('public'));




APP.listen(PORT, () => {
    console.log('hello')
})