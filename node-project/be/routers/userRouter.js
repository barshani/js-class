const express = require("express");
const router = express.Router();
const fs = require("fs");
const userModel = require("../models/userModel");
const userModelJOI = require("../models/userModelJoi");
const jwt=require("jsonwebtoken");
const crypto=require("../helper/crypto_helper");
const verify_logged_in =require("../middleware/verify_logged_in");
const { request } = require("http");
const { response } = require("express");
const config = require('config');
router.post("/register", async (request, response) => {
    try {
        const myUserModel = new userModelJOI(request.body);
        const errors = myUserModel.validateRegistration();
        if (errors)
            return response.status(400).send(errors);
        const userExist=await userModel.findOne({"email":request.body.email})
        if(userExist){
            return response.status(400).send("user allready exist");
        }
        myUserModel.biz=false;
        myUserModel.password = crypto.hash(myUserModel.password);
        const user = new userModel(myUserModel);
        await user.save();
        response.status(201).json("success");
    } catch(err) {
        response.status(500).send(err.message);
    }
});
router.post("/login", async (request, response) => {
   try {
        const myUserModel = new userModelJOI(request.body);
        const errors = myUserModel.validateRegistration();
        if (errors)
            return response.status(400).send(errors);
        myUserModel.password = crypto.hash(myUserModel.password);
        const user=await userModel.findOne({"email":myUserModel.email})
        if(!user||user.password!==myUserModel.password)
           {
            response.send("incorrect password or username")
           }
        myUserModel.token = jwt.sign({ user }, "MyCoolToken", { expiresIn: "30m" });
        delete myUserModel.password;
        response.status(200).json(myUserModel);
    } catch(err) {
        response.status(500).send(err.message);
    }
});
router.get("/me",verify_logged_in, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const myUser=jwt.decode(token).user
  const user = await userModel.findById(myUser._id);
  const myUser2=new userModelJOI(user);
  myUser2._id=user._id;
  myUser2.biz=user.biz;
  delete myUser2.password;
  res.send(myUser2);
});
module.exports = router;