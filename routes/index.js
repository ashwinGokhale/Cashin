/**
 * Created by ashwi on 2/10/2017.
 */

var express = require('express');
var router = express.Router();

var url = 'https://connect.squareup.com/oauth2/authorize?client_id=sq0idp-ZpqpEc9q3GCTgG2SX3KYRA&scope=PAYMENTS_WRITE%20PAYMENTS_READ%20CUSTOMERS_READ&state=loggedin';

// Home page route
router.get('/', function (req, res) {
	res.render('index', {url: url});
});

module.exports = router;


