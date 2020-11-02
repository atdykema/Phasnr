const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config');
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use('/posts', postsRoute);


//ROUTES
app.get('/home', (req,res) =>{
    res.send('homepage');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true}, 
    () => { console.log('connected to database');}
);

//Start listening to the server
app.listen(3000);


