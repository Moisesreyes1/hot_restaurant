var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Create new reservation
app.post("/make", function(req, res) {
	var newReservation = req.body;
	newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();
	console.log(newReservation);
	newReservation.push(newReservation);
	res.json(newReservation);
});

module.exports = reservationPost;