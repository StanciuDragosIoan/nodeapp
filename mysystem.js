//bring in OS module
var os = require("os");

var message = "Here is some info on your system";

var sysarray = new Array(
  "Type: " + os.type(),
  "Node Version: " + process.version,
  "Platform " + os.platform(),
  "Hostname " + os.hostname(),
  "Total Memory " + os.totalmem(),
  "Free Memory " + os.freemem(),
  "Uptime " + os.uptime()
);

//in node console log() prints info (just like document.write() in the browser)
console.log(message);

var arraylen = sysarray.length;

i = 0;

while (i < arraylen) {
  console.log(sysarray[i]);
  i++;
}
