const User = require("../models/userModel")


const createPost = async (req, res) => {
    try {
        const {postedBy, text, img} = req.body;

        if(!postedBy || !text) {
            return res.status(404).json({message: "postedBy and text fields are required"})
        }

        const user = await User.findById(postedBy);
    } catch (error) {
        
    }

}

module.exports = {
    createPost
}