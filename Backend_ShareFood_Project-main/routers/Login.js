const express = require("express");
const postUserData = require('../controllers/signup.js');

const router = express.Router();

//---------------------------------> POST USER DATA (SEARCHING) <-----------------------------------//
router.post('/signup', postUserData);


//---------------------------------> POST NEW USER DATA (ADDING) <----------------------------------//

module.exports = router;