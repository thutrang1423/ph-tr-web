const AddUserAccount = require("../controllers/register.js");
const express = require("express");

const router = express.Router();


router.post('/register', AddUserAccount);

module.exports = router;