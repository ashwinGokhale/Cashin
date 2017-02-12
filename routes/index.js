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

var data = "square-commerce-v1://payment/create?data=%7B%22amount_money%22%3A%7B%22amount%22%3A300%2C%22currency_code%22%3A%22USD%22%7D%2C%22callback_url%22%3A%22https%3A%2F%2Fcashinapp.herokuapp.com%2Fcallback%22%2C%22client_id%22%3A%22sq0idp-ZpqpEc9q3GCTgG2SX3KYRA%22%2C%22version%22%3A%221.1%22%2C%22notes%22%3A%22christmasparty%22%2C%22options%22%3A%7B%22supported_tender_types%22%3A%5B%22CREDIT_CARD%22%2C%22CASH%22%5D%7D%2C%22clear_default_fees%22%3A%22TRUE%22%2C%22auto_return%22%3A%22True%22%2C%22skip_receipt%22%3A%22True%22%7D";
 console.log(decodeURIComponent(data));

module.exports = router;


