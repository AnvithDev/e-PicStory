const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/',(req,res)=>{
    res.json({msg:"Posts api here"})
})

// Create a post
router.post('/newPost', async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json({post:savedPost})
    }catch(err){
        res.status(500).json({err})
    }
})

// Update a Post
router.put('/updatePost/:id', async (req,res)=>{
    try{
        const {postID} = req.params
        const post = await Post.findById(postID)
        if(post.userID === req.body.userID){
            await post.updateOne({$set:req.body})
            res.status(200).json({msg:"Post has been updated"})
        }else{
            res.status(403).json({msg:"You can only update your post"})
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete a post
router.delete('/updatePost/:id', async (req,res)=>{
    try{
        const {postID} = req.params
        const post = await Post.findById(postID)
        if(post.userID === req.body.userID){
            await post.deleteOne();
            res.status(200).json({msg:"Post has been deleted"})
        }else{
            res.status(403).json({msg:"You can only delete your post"})
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// Like a post
router.put("/:id/like", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userID)){
            await post.updateOne({$push:{likes:req.body.userID}});
            res.status(200).json("The post has been liked")
        }else{
            await post.updateOne({$pull:{likes:req.body.userID}});
            res.status(200).json("The post has been unliked")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// Get a post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json({post})
    }catch(err){
        res.status(500).json(err);
    }
})

// Get timeline posts 
router.get("/all/timeline", async(req,res)=>{
    let postArray = [];
    try{
        const currentUser = await User.findById(req.body.userID);
        const userPosts = await Post.find({userID:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map(friendID =>{
                return Post.find({userID: friendID});
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;