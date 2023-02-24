const JOI = require("joi");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    biz: Boolean
}, {versionKey: "_v"})
const userModel = mongoose.model("userModel", UserSchema, "users");

module.exports = userModel;