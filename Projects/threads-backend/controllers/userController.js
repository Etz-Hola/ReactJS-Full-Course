const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/helper/generateTokenAndSetCookie');

const signUpUser = async (req, res) => {
    try {
        const {name, email, username, password} = req.body;
        const user = await User.findOne({$or:[{email}, {username}]})

        if (user) {
            return res.status(400).json({message: 'User already exists'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,
        }) 

        await newUser.save()

        if(newUser){

            generateTokenAndSetCookie(newUser._id, res)
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
            })
        }else{
            res.status(400).json({message: 'Invalid user data'})
        }

    } catch (error) {
        res.status(500).json({ message: error.message})
        console.log("Error in signupUser:", error.message)        
    }
  
};



const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect) return res.status(400).json({error: "Invalid username or password"})

        if(user.isFrozen) {
            user.isFrozen = false
            await user.save()
        }
 
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            bio: user.bio,
            profilePic: user.profilePic,
        })
    } catch (err) {
        res.status(500).json({error: err.message});
        console.log("Error in loginUser: ", err.message);
    }
}

const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 1})
        res.status(200).json({message: "user logged out successfully"})
    } catch (error) {
        res.status(500).json({error: err.message});
        console.log("Error in logoutUser: ", err.message);        
    }
}


const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if (id === req.user._id.toString())
            return res.status(400).json({error: 'You can not Follow/Unfollow Your self'})
        if (!userToModify || !currentUser)
            return res.status(400).json({error: "User not Found"});

            const isFollowing = currentUser.folllowing.includes(id)
            if (isFollowing) {

                // UNFOLLOW user
                await User.findByIdAndUpdate(id, {$pull: {followers: req.user._id}})
                await User.findByIdAndUpdate(req.user._id, {$pull: {following: id}})
                res.status(200).json({message: "User unfollowed successfully"})

            }else{
                 // FOLLOW user
                 await User.findByIdAndUpdate(id, {$push: {followers: req.user._id}})
                 await User.findByIdAndUpdate(req.user._id, {$push: {following: id}})
                 res.status(200).json({message: "User unfollowed successfully"})

            }
    } catch (err) {
        res.status(500).json({error: err.message});
        console.log("Error in followUnfollowUser: ", err.message);
        
    }

}

 
module.exports = { signUpUser, loginUser, logoutUser, followUnfollowUser };
 