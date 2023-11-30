const Post = require("../models/postModel");
const User = require("../models/userModel")


const createPost = async (req, res) => {
    try {
        const {postedBy, text, img} = req.body;

        if(!postedBy || !text) {
            return res.status(404).json({message: "postedBy and text fields are required"})
        }

        const user = await User.findById(postedBy);
        if(!user){
            return res.status(404).json({message: "user not found"})
        }

        const maxLength = 500;

        if(text.length > maxLength) {
            return res.status(404).json({message: `Text  must be less than ${maxLength} characters`})
        }

        const newPost = await Post({postedBy, text, img})

        await newPost.save()

        res.status(201).json({message: "Post created successfully", newPost})

    } catch (err) {
        res.status(500).json({ message: err.message }); //internal server error
        console.log("Error in Create Post: ", err.message);
    }    

}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }

        res.status(200).json({post})

    
    } catch (err) {
        res.status(500).json({ message: err.message }); //internal server error
        console.log("Error in Get Post: ", err.message);
        
    }

}

module.exports = {
    createPost,
    getPost
}