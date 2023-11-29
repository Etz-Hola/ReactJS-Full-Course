const express = require("express");
const {
  followUnfollowUser,
  signUpUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser); // toggles state(follow / unfollow)
router.get("/getUserProfile");



module.exports = router;


 



cmn