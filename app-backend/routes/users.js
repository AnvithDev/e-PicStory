const User = require('../models/User');
const bcrypt = require('bcrypt')
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({msg:"User Route here"})
})

// Update a User
router.put('/:id', async(req,res)=>{
    const {id} = req.params

    if(req.body.userID === id.trim() || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt)
            }catch(err){
                res.status(500).json(err);
            }
        }

        try{
            const user = await User.findOneAndUpdate(id,{
                $set: req.body
            })
            res.status(200).json({msg:"Account updated "})
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        return res.status(403).json({msg:"You can only update your account"})
    }
})

// Delete a user
router.delete('/:id', async(req,res)=>{
    const {id} = req.params

    if(req.body.userID === id.trim()){

        try{
            await User.findByIdAndDelete(req.body.userID)
            res.status(200).json({msg:"Account deleted "})
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        return res.status(403).json({msg:"You can only delete your account"})
    }
})

// Get a single user
router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,updatedAt, ...other} = user._doc
        if(user)
            res.status(200).json({user:other})
        else
            res.status(404).json({msg:"Not Found"})
    }catch(err){
        res.status(500).json(err)
    }
})

// Follow a user
router.put('/:id/follow', async(req,res)=>{
    const {id} = req.params

    if(req.body.userID !== id.trim()){
        try{
            // ID we are going to follow
            const user = await User.findById(id)
            // Our ID
            const currentUser = await User.findById(req.body.userID)

            if(!user.followers.includes(req.body.userID)){
                await user.updateOne({$push:{followers: req.body.userID}})
                await currentUser.updateOne({$push:{following: id}})
                res.status(200).json({msg:"User has been followed"})
            }else{
                res.status(403).json({msg:"You already follow the user"})
            }
            
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        return res.status(403).json({msg:"You can't follow yourself"})
    }
})

// Unfollow a user
router.put('/:id/unfollow', async(req,res)=>{
    const {id} = req.params

    if(req.body.userID !== id.trim()){
        try{
            const user = await User.findById(id)
            const currentUser = await User.findById(req.body.userID)

            if(user.followers.includes(req.body.userID)){
                await user.updateOne({$pull:{followers: req.body.userID}})
                await currentUser.updateOne({$pull:{following: id}})
                res.status(200).json({msg:"You unfollowed the user"})
            }else{
                res.status(403).json({msg:"You were not following the user"})
            }

        }catch(err){
            res.status(500).json(err);
        }

    }else{
        return res.status(403).json({msg:"You can't follow yourself"})
    }
})

module.exports = router;