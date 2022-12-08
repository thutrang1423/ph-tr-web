const users = require("../models/user.js");
const bcrypt = require("bcrypt");

const AddUserAccount = async(req, res) =>{

    try{
        // Hash Password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const UserData = {
            fname: req.body.fname,
            lname: req.body.lname,
            birthday: req.body.bthday,
            email: req.body.email,
            password: hashedPassword
        }
        const CheckUserData = await users.findOne({email: req.body.email});
        if(CheckUserData){
            res.status(409).send({message: "Incorrect Email/Password"});
        }
        else{
            const UserInsertData = await users.insertMany(UserData);
            if(!UserInsertData){
                throw new Error("Can not upload");
            }else{
                res.status(200).send({message: "Successful Registration"});
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

module.exports = AddUserAccount;