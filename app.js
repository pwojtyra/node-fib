var http = require('http');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '172.0.0.1'

var fib = function(n) {

    console.log (n);
    const fibonacci = require ('fibonacci');
    const bigNumber = fibonacci.iterate (n);
    console.log (bigNumber);
    callback (bigNumber);
    return;
}

http.createServer('/:n', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fib(req.params.n, function(number) {
        console.log (number);
        res.write(number);
        res.end()
    });
    
  }).listen(server_port);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    console.log (q.n);
    var number = fib(q.n);
    console.log (number);
    res.end(number);

  }).listen(8080);