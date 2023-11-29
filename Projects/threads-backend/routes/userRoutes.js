const express = require("express");
const {
    getUserProfile, followUnfollowUser, signUpUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/g

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser); // toggles state(follow / unfollow)



module.exports = router;


 
