/**
 * Created by ashwi on 2/10/2017.
 */

var express = require('express');
var settings = require('../config');
var router = express.Router();

var base_url = "https://connect.squareup.com/v2";

// Event Setup
router.get('/setup', function (req, res) {
	res.render('setup');
});

// Handle finishing setup
router.post('/setup', function (req, res) {
	settings.name = req.body.name;
	settings.cost = req.body.cost;
	console.log("Name: " + settings.name);
	console.log("Cost: " + settings.cost);
	res.render('event');

});

module.exports = router;
