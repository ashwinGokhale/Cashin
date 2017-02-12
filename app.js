/**
 * Created by Ashwin on 2/10/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');
var routes = require('./routes');
var setup = require('./routes/setup');
var event = require('./routes/event');
var callback  = require('./routes/callback');
var charge = require('./routes/charge');
var settings = require('./config');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));


// Set view engine
app.set('view engine', 'pug');

// Set port to 5000 by default
app.set('port', (process.env.PORT || 5000));


// Serve static bootstrap and jQuery files
app.use("/static", express.static(__dirname + '/static'));


// Home Page
app.use('/', routes);

// Setup Page
app.all('/setup', setup);

// Event Page
app.all('/event', event);

// Callback
app.all('/callback', callback);

// Charge
app.all('/charge', charge);


// Run Server
var server = app.listen(app.get('port'), function () {
	console.log("Listening on port %s", app.get('port'));
});