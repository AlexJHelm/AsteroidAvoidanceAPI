var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// Sets up route to Database Schema
require("../models/scoreData")
var gameModel = mongoose.model("highscores");

// All CRUD operations
router.get("/getdata", function(req,res){
    gameModel.find({}).then(function(games){
        res.json({games});
    })
});

router.post("/deletegame", function(req, res){
    console.log(req.body.game._id);
    gameModel.findByIdAndDelete(req.body.game._id).exec();
    res.redirect("games.html");
})

router.post("/updategame", function(req, res)
{
    console.log(req.body);
    gameModel.findByIdAndUpdate(req.body.id,{gamename:req.body.game}).then(function(){
        res.redirect("games.html");
    });
})

router.post("/saveGame", function(req, res)
{
    console.log(req.body);
    // Saves Data in Database
    new gameModel(req.body).save().then(function(){
        res.redirect("games.html");
    });
})

module.exports = router;