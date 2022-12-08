const users = require("../models/user.js")
const bcrypt = require("bcrypt");
const postUserData = async (req, res) => {
    const Email = req.body.user;
    const Password = req.body.pwd;
    console.log(Email);
    console.log(Password);
    console.log(req.body);
    try{
        const findUser = await users.findOne({email: Email});
        // const matchPassword = await bcrypt.compare(Password, findUser.passwork);
        res.send(findUser)
    }catch(err){
        res.status(404).send();
    }
}

module.exports = postUserData;