var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//variable arrays
var reservation {
    name: "",
    phone: "",
    email: "",
    ID: ""
};

var tables {
    name: "",
    phone: "",
    email: "",
    ID: "",
};

app.get("/", function(req, res))


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});