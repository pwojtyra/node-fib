var app = require('express').createServer();

var fib = function(n, callback) {

    const fibonacci = require ('fibonacci');
    const bigNumber = fibonacci.iterate (n);
    callback (null, bigNumber);
    return;
}

app.get('/:n', function(req, res) {

    fib(req.params.n, function(err, number) { 
        res.send(''+number);
    });
});

app.listen(8080);
