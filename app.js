const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb://localhost/CRUD'


app.use(bodyParser.json());
//Import routes
const postRoutes = require('./routes/posts')

//middlewere
app.use('/posts',postRoutes)


//connct to db
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>{
    console.log("DB connected!!");
})



//port lisitening 
app.listen(3000, () => {
    console.log("started");
})