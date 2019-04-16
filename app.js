var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

var fib = function(n, callback) {

    console.log (n);
    const fibonacci = require ('fibonacci');
    const bigNumber = fibonacci.iterate (n);
    console.log (bigNumber);
    callback (bigNumber);
    return;
}

app.get('/:n', function(req, res) {

    fib(req.params.n, function(number) {
        console.log (number);
        res.send(number);
    });
});

// app.listen(server_port, server_ip_address, function () {
app.listen(server_port, function () {
    console.log( "Listening on port " + server_port )
  });