const User = require('../models/userModel')
const bcrybt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/helper/generateTokenAndSetCookie');

const signUpUser = async (req, res) => {
    try {
        const {name, email, username, password} = req.body;
        const user = await User.findOne({$or:[{email}, {username}]})

        if (user) {
            return res.status(400).json({message: 'User already exists'})
        }

        const salt = await bcrybt.genSalt(10)
        const hashedPassword = await bcrybt.hash(password, salt)

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



const loginUser = async (reg, res) => {
    try {
        const { username, password } = req.body;
    }

}

module.exports = { signUpUser, loginUser };
