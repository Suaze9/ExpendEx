require('dotenv/config');
const PORT = 8080;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const auth = require('./src/routes/auth');
const expenses = require('./src/routes/expenses');


app.use('/api/auth', auth);
app.use('/api/expenses', expenses);


mongoose.connect(process.env.MNG_CREDENTIALS, { useUnifiedTopology: true, useNewUrlParser: true }, ()=>{
    console.log('Databse connected :D');
})

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})