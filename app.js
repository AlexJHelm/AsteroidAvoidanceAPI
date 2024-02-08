// Variables
var  express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var crud = require("./routes/crud");

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/", crud);

// Connect to MonoDB via Mongoosse
mongoose.connect("mongodb://localhost:27017/Highscores",{
}).then(function(){
    console.log("Connected to MongoDB database.");
}).catch(function(err){
    console.log(err);
});

app.use(express.static(dirname+'/pages'));

// JavaScript for a route
app.get("/", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(dirname+"/pages/index.html"));
});

app.get("/highscores", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(dirname+"/pages/highscores.html"));
});

app.listen(5000, function()
{
    console.log("Running on Port 5000");
})