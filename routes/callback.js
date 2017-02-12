/**
 * Created by ashwi on 2/11/2017.
 */

var express = require('express');
var settings = require('../config');
var bodyParser = require('body-parser');
var unirest = require('unirest');
var router = express.Router();

router.use(bodyParser.json({ type: 'application/*+json' })); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var post_for_token = "https://connect.squareup.com/oauth2/token";

// Handle oauth2 Page
router.get('/callback', function (req, res) {
    // If getting auth code
    if (req.query.code) {
        var auth_code = req.query.code;

        var payload = {
			"client_id": settings.app_id,
			"client_secret": settings.secret,
			"code": auth_code
        };

        var oauth_request_headers = {
            'Authorization': 'Client ' + settings.secret,
            'Accept': 'application/json',
            'Content-Type': 'application/json'};


		unirest.post(post_for_token)
			.headers(oauth_request_headers)
			.send(payload)
			.end(function(response){
				if (response.body.errors){
					res.json({status: 400, errors: response.body.errors})
				}else{
					settings.userToken = auth_code;
					res.redirect('/setup');
				}
			});


    }

    // If receiving data from a sent transaction
    else if(req.query.data)
        res.redirect('/event');
});

module.exports = router;