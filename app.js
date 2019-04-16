var app = require('express').createServer();

var fib = function(n, callback) {

    const fibonacci = require ('fibonacci');
    const binNumber = fibonacci.iterate (n);
    callback (null, binNumber)
    return;
}

app.get('/:n', function(req, res) {
    
    fib(req.params.n, function(err, number) { 
        res.send(''+number);
    });
});

app.listen(8080);
