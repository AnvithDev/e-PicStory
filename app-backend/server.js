require('dotenv').config();
const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();

// user defined imports
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const auth = require('./routes/auth')
const dbConnect = require('./config/dbConnect')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet());
app.use(morgan("common"));

// Required Constants
const serverPORT = process.env.PORT || 5001;

// Routes
app.get('/',(req,res)=>{
    res.json({message: "Server is up and running successfully"})
})

app.use("/api/users",usersRoute);
app.use("/api/posts",postsRoute);

app.use("/auth",auth);





app.listen(serverPORT, ()=>{
    dbConnect()
    console.log("Server is listening to port "+serverPORT);
})