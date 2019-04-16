var http = require('http');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '172.0.0.1'

var fib = function(n, callback) {
  console.log (n);
  const fibonacci = require ('fibonacci');
  const bigNumber = fibonacci.iterate (n);
  console.log (bigNumber);
  callback (bigNumber);
  return;
}

http.createServer(function (req, res) {
  fib(req.params.n, function(number) {
    console.log (number);
    res.end(number);
    });
  }).listen(8080);