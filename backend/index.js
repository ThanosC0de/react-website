const port = 5501;
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
mongoose.connect("mongodb+srv://artcy:99794@cluster0.ccvaoqa.mongodb.net/react-website-main");

//ApI creaction

app.get("/",(req,res)=>{
    res.send("Express App is Runnuing")
})

// Image storege Engine

const storege = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cd)=>{
        return cd(null,`${file.fieldname}_${Data.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storege})

//creating uplode endpoint for images
app.post("/uploade",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url
    })
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port" +port)
    }
    else{
        console.log("Error :"+error)
    }
})