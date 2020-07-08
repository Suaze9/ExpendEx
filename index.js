
require('dotenv/config');

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = require('./routes/users');

app.use('/users', users);

const PORT = 8080;



mongoose.connect(process.env.MNG_CREDENTIALS, { useUnifiedTopology: true, useNewUrlParser: true }, ()=>{
    console.log('Databse connected :D');
})

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})