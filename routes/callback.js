/**
 * Created by ashwi on 2/11/2017.
 */

var express = require('express');
var settings = require('../config');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var post_for_token = "https://connect.squareup.com/oauth2/token";



// Login Page
router.get('/callback', function (req, res) {
    //if getting auth code...
    //auth_code = request.args.get("code")
    if (request.args.code) {
        var auth_code = request.args.code;
        var payload = {"client_id": settings.app_id, "client_secret": settings.secret, "code": auth_code};

        var xhr = new XMLHttpRequest();
        xhr.open("POST", post_for_token, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            data: payload
        }));

        //response = requests.post(post_for_token, data = payload);
        res.render('setup');
    }
    //if receiving data from a sent transaction...
	else if(request.args.data)
        res.render('event');
});

module.exports = router;