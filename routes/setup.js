/**
 * Created by ashwi on 2/10/2017.
 */

var express = require('express');
var router = express.Router();

var base_url = "https://connect.squareup.com/v2";

// Event Setup
router.get('/setup', function (req, res) {
	res.render('setup');
});

module.exports = router;
