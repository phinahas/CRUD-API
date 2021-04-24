const e = require('express');
const express = require('express')
const router = express.Router();
const Post = require('../models/Posts')



//get all post
router.get('/',async(req,res)=>{   
    try{
       const displayData = await Post.find()
       res.json(displayData)
    }
    catch(err)
    {
        console.log(err);
    }
})


//submit the post
router.post('/',async(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
     const savedPost = await post.save()
     try{
         console.log("saved");
         res.json(savedPost)
     }
     catch(err)
     {
         console.log("error");
         console.log(err);
     }
    
})


//specific post
router.get('/:postId',async(req,res)=>{
    console.log(req.params.postId);
    try{
         const post =await Post.findById(req.params.postId)
         res.json(post)

    }catch(err){
        console.log(err);
    }
})

//delet post

router.delete('/:postId',async(req,res)=>{
    console.log("helo");
    try{
        console.log("started try block");
        const deletdpost = await Post.remove({_id:req.params.postId});
        console.log("try block");
        res.json(deletdpost);
        console.log(deletdpost);

    }catch(err)
    {
        console.log(err);
        console.log("error");
    }
})

//update post
router.patch('/:postId',async(req,res)=>{
    try{
        const updatePost = await Post.updateOne({_id:req.params.postId},{$set:{description:req.body.description}})
        res.json(updatePost)
    }catch(err){
        console.log(err);
    }
})


module.exports = router;