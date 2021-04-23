const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();




//connct to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("connected");
})



//port lisitening 
app.listen(3000, () => {
    console.log("started");
})