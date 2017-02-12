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

var data = "square-commerce-v1://payment/create?data=%7B%22amount_money%22%3A%7B%22amount%22%3A300%2C%22currency_code%22%3A%22USD%22%7D%2C%22callback_url%22%3A%22https%3A%2F%2Fcashinapp.herokuapp.com%2Fcallback%22%2C%22client_id%22%3A%22sq0idp-ZpqpEc9q3GCTgG2SX3KYRA%22%2C%22version%22%3A%221.1%22%2C%22notes%22%3A%22christmasparty%22%2C%22options%22%3A%7B%22supported_tender_types%22%3A%5B%22CREDIT_CARD%22%2C%22CASH%22%5D%7D%2C%22clear_default_fees%22%3A%22TRUE%22%2C%22auto_return%22%3A%22True%22%2C%22skip_receipt%22%3A%22True%22%7D";


// Handle charges
router.get('/charge', function (req, res) {
	res.redirect(data);
	// console.log(req.body);
	// res.send("Received: " + req.body);
	//
	// var token = require('crypto').randomBytes(64).toString('hex');
	//
	//
	// var request_body = {
	// 	card_nonce: request_params.nonce,
	// 	amount_money: {
	// 		amount: amount,
	// 		currency: 'USD'
	// 	},
	// 	idempotency_key: token
	// };
	//
	// unirest.post("square-commerce-v1://payment/create")
	// 	.headers({
	// 		'Authorization': 'Bearer ' + settings.token,
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	})
	// 	.send(request_body)
	// 	.end(function(response){
	// 		if (response.body.errors){
	// 			res.json({status: 400, errors: response.body.errors})
	// 		}else{
	// 			res.json({status: 200})
	// 		}
	// 	});
});

module.exports = router;