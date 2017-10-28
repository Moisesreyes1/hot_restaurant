var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//variable arrays
var reservation = [];

var wait = [{
    name: "hey",
    phone: "hello",
    email: "whats up",
    ID: "43"
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"))
});
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/make.html"))
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/view.html"))
});
app.get("/wait", function(req, res) {
    res.json(wait);
});
app.post("/api/tables", function(req, res) {
    reservation.push(req.body)
});


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});