//simple webserver

// var http = require("http");

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello!");
//   })
//   .listen(1337, "127.0.0.1");
// console.log("Webserver started..");

var http = require("http");
var fs = require("fs"); //fs=file system module (as opposed to the http module)

http
  .createServer(function(req, res) {
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  })
  .listen(1337, "127.0.0.1");
console.log("Webserver started..");
