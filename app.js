//var app = require('express').createServer();
var express = require('express');
var app = express();

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
        res.send(''+number);
    });
});

app.listen(8080);
