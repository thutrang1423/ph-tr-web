const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
    name: String,
    passwork: String
})

const users = mongoose.model('Infor_User', UserDBSchema);

module.exports = users;