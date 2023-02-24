const JOI= require("joi");
const mongoose = require("mongoose");

const VisitCardSchema = mongoose.Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    photo: String,
    user_id: String
}, {versionKey: "_v"})

const visitCardModel = mongoose.model("visitCardModel", VisitCardSchema, "visitCard");

module.exports = visitCardModel;