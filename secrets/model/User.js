require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const Schema = mongoose.Schema;
const userSchema = Schema({
    'email': String,
    'password': String
});

// let secret = process.env.SECRET;
// exports.userSchema = userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

const User = mongoose.model('User', userSchema);
module.exports = User;

//exports.User = new mongoose.model('User', userSchema);