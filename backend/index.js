// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const { log } = require("console");
// const { type } = require("os");


// app.use(express.json());
// app.use(cors());

// // Database conection with MongoDb

// mongoose.connect("mongodb+srv://artcy:99794@cluster0.ccvaoqa.mongodb.net/react-website-main");

// //ApI creaction

// app.get("/",(req,res)=>{
//     res.send("Express App is Runnuing")
// })

// // Image storege Engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// //creating uplode endpoint for images

// app.use('/images',express.static('upload/images'))

// app.post("/upload",upload.single('product'),(req,res)=>{    
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// //schema for creating product 

// const Product = mongoose.model("Product",{
//     id:{
//         type: Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     avilable:{
//         type:Boolean,
//         default:true,
//     },
// })

// app.post('/addproduct',async (req,res)=>{
//     let products = await Product.find({});
//     let id;
//     if(products.length>0)
//     {
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1;
//     }
//     else{
//         id=1;
//     }
//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })

// // creating API for deleting product

// app.post('/removeproduct',async (req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })

// //Creating API getting All product

// app.get('/allproducts',async(req,res)=>{
//     let products = await Product.find({});
//     console.log("ALL Products Fetched");
//     res.send(products);
// })

// //user shema crating for user model

// const User = mongoose.model('Users',{
//     name:{
//         type:String,
//     }, 
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     data:{
//         type:Date,
//         default:Date.now,
//     }
// })

// //Creatting Endpoint for registering the user

// app.post('/signup',async(req,res)=>{

//     let check = await Users.findOne({email:req.body.email});
//     if (check){
//         return res.status(400).json({success:false,errors:"existing user found with same email address"})
//     }
//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//        cart[i]=0;
//     }
//     const user = new Users({
//         name:req.body.username,
//         email:req.body.password,
//         password:req.body.password,
//         cartData:cart,
//     })

//     await user.save();

//     const data = {
//         user:{
//             id:user.id
//         }
//     }

//     const token = jwt.sing(data,'secret_ecom');
//     res.json({success:true,token})
    
// })

// app.listen(port,(error)=>{
//     if(!error){
//         console.log("Server Running on port " +port)
//     }
//     else{
//         console.log("Error :"+error)
//     }
// })

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://artcy:99794@cluster0.ccvaoqa.mongodb.net/react-website-main");

// API creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// API for adding a product
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = 1;
        if (products.length > 0) {
            const lastProduct = products[products.length - 1];
            id = lastProduct.id + 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// API for deleting a product
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// API for getting all products
app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Schema for creating a user
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

// Creating an endpoint for registering the user
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, errors: "User already exists with the same email address" });
        }

        // Create cart object
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create new user
        const newUser = new User({
            name,
            email,
            password,
            cartData: cart,
        });

        // Save user to database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, 'secret_ecom');

        // Send response
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Starting the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port " + port);
    } else {
        console.log("Error :" + error);
    }
});
