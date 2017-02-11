/**
 * Created by Ashwin on 2/10/2017.
 */

var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');
var setup = require('./routes/setup');
var event = require('./routes/event');

// Environment variables
process.env['app_id'] = 'sq0idp-ZpqpEc9q3GCTgG2SX3KYRA';
process.env['scope'] = 'PAYMENTS_WRITE%20PAYMENTS_READ%20CUSTOMERS_READ';
process.env['state'] = 'loggedin';


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


// Run Server
var server = app.listen(app.get('port'), function () {
	console.log("Listening on port %s", app.get('port'));
});

module.exports = app;