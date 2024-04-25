const port = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database conection with mongoDb
mongoose.connect("mongodb+srv://sahilthummar257:sahil@96627@cluster0.vu8q127.mongodb.net/react-website");

//ApI creaction

app.get("/",(req,res)=>{
    res.send("Express App is Runnuing")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port" +port);
    }
    else{
        console.log("Error :"+error);
    }
})