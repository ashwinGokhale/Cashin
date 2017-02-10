var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/public/" + "index.html" );
});

app.use("/static", express.static(__dirname + '/static'));

var server = app.listen(5000, function () {
    var port = server.address().port;

    console.log("Listening on port %s", port);
});

