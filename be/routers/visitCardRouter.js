const express = require("express");
const router = express.Router();
const visitCardModel = require("../models/visitCardModel");
const visitCardModelJOI = require("../models/visitCardModelJoi");
const jwt=require("jsonwebtoken");
const verify_logged_in = require("../middleware/verify_logged_in");
const { request, response } = require("express");
router.post("/" ,verify_logged_in, async (request, response) =>{
    try {
        const myVisitCardModel = new visitCardModelJOI(request.body);
        const errors = myVisitCardModel.validateRegistration();
        if (errors)
            return response.status(400).send(errors)
        const token = request.headers.authorization.split(" ")[1];
        myVisitCardModel.user_id=jwt.decode(token).user._id
        console.log(myVisitCardModel)
        const visitCard= new visitCardModel(myVisitCardModel);
        await visitCard.save();
        response.status(201).json(myVisitCardModel);
    } catch(err) {
        response.status(500).send(err.message);
    }
});
router.get('/my',verify_logged_in, async (request,response)=>{
    try{
        const token = request.headers.authorization.split(" ")[1];
        const id=jwt.decode(token).user._id;
        const cards=await visitCardModel.find({"user_id":id})
        response.send(cards);
    }catch(err){
        response.status(500).send(err.message);
    }
})
router.get("/:_id",verify_logged_in, async (request, response) => {

    try {
        const id = request.params._id;
        const visitCard = await visitCardModel.findOne({"_id":id});
        response.json(visitCard);
    } catch(err) {
        response.status(500).send(err.message);
    }

});
router.put("/:_id",verify_logged_in,async (request,response)=>{
     try {
        const visitCard = request.body;
        visitCard._id = request.params._id;
        const joiVisitCard = new visitCardModelJOI(visitCard);
        const errors = joiVisitCard.validateRegistration();
        if (errors)
            return response.status(400).send(errors);
        const updatedVisitCard = await visitCardModel.updateOne({_id:visitCard._id}, visitCard);
        if (updatedVisitCard.matchedCount === 0)
            response.sendStatus(404);
        else
            response.json({modified: updatedVisitCard.modifiedCount});
    } catch(err) {
        response.status(500).send(err.message);
    }
});
router.delete("/:_id", async (request, response) => {
    try {
        const id = request.params._id;
        await visitCardModel.deleteOne({"_id": id});
        response.send("success");
    } catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;