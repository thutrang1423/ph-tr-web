//---------------------------> Import <-----------------------//
const bodyParser = require("body-parser")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const signup = require("./routers/Login.js");
const register = require("./routers/Register.js")
//---------------------------> Express <-----------------------//
const app = express();
require('dotenv').config();
app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({extended : true, limit: "30mb"}));
app.use('/', cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATH, DELETE');
    next();
})

//-----------------------------> Mongoose <--------------------------//
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

//------------------------------> Post <-----------------------------//
app.use(signup);
app.use(register);
//---------------------------> Set up PORT <-------------------------//
let port = process.env.PORT;
if(port == null || port == ""){
  port = 3500;
}

//---------------------------> ListenPort <--------------------------//
app.listen(port, () => {
    console.log("Server is running on port 3500");
})