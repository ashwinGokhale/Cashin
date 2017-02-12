/**
 * Created by ashwi on 2/12/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var unirest = require('unirest');
var settings = require('../config');
var router = express.Router();

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// Handle charges
router.get('/charge', function (req, res) {
	var data = "square-commerce-v1://payment/create?data=";

    var payload = {
    	"amount_money":{"amount":settings.cost * 100,"currency_code":"USD"},
		"callback_url":"https://cashinapp.herokuapp.com/callback",
		"client_id":settings.app_id,
		"version":"1.1",
		"notes":settings.name,
		"options":{"supported_tender_types":["CREDIT_CARD","CASH"]},
		"clear_default_fees":"TRUE",
		"auto_return":"True",
		"skip_receipt":"True"
    };
    data += encodeURIComponent(JSON.stringify(payload));
    res.redirect(data);
});

module.exports = router;