const User = require("../models/userModel")


const createPost = async (req, res) => {
    try {
        const {postedBy, text, img} = req.body;

        if(!postedBy || !text) {
            return res.status(404).json({message: "postedBy and text fields are required"})
        }

        const user = await User.findById(postedBy);
    } catch (err) {
        res.status(500).json({ message: err.message }); //internal server error
        console.log("Error in Create Post: ", err.message);   

    }

}

module.exports = {
    createPost
}