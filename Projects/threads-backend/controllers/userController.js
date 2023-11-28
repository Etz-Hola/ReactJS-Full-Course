const User = require('../models/userModel')
const bcrybt = require('bcryptjs')

const signUpUser = async (req, res) => {
    try {
        const {name, email, username, password} = req.body;
        const user = await user.findOne({$or:[{email}, {username}]})

        if (user) {
            return res.status(400).json({message: 'User already exists'})
        }
    } catch (error) {
        
    }
  
};

module.exports = { signUpUser };
