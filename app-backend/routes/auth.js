const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Register
router.post('/register',async (req,res)=>{
    const {username,email,password} = req.body
    console.log(password)

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })
        const user = await newUser.save();
        res.status(200).json({message:"User created successfully!!!",user})
    }catch(err){
        console.log(err);
    }
})

// Login
router.post('/login',async (req,res)=>{
    const {email,password} = req.body

    try{
        const user = await User.findOne({email})
        if(!user) res.status(404).json({msg:"User not found!!"})

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) res.status(404).json({msg:"Password Incorrect!!"})

        res.status(200).json({message:"User retrieved successfully!!!",user})
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;