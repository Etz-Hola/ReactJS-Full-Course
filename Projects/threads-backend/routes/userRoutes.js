const express = require("express");
const { getUserProfile, followUnfollowUser, signUpUser, loginUser, logoutUser, updateUser } = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");
const cloudinary = require('cloudinary').v2

const router = express.Router();

router.get("/profile/:query", getUserProfile);

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser); // toggles state(follow / unfollow)
router.put("/update/:id", protectRoute, updateUser) // updaates user



module.exports = router;


 
