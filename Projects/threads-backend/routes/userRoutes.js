const  express = require  ("express");  
const { signUpUser } = require ("../controllers/userController");

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('signed up successfully');
})


module.exports = router




