var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ScoreData = new Schema({
    name:String,
    score:String
});

mongoose.model("Highscores", ScoreData);