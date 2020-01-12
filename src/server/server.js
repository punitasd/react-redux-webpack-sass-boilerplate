var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();
app.use(express.static(__dirname));

var params = require("minimist")(process.argv.slice(2));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/environmentParams", function(request, response) {
  response.setHeader("content-type", "text/javascript");
  response.end("var environmentParams = " + JSON.stringify(params) + ";");
});

app.listen(3000, error =>
  error ? console.error(error) : console.log(`Listening on port 3000`)
);

// https
//   .createServer(
//     {
//       key: fs.readFileSync(__dirname + "/server.key"),
//       cert: fs.readFileSync(__dirname + "/server.cert")
//     },
//     app
//   )
//   .listen(3000, error =>
//     error ? console.error(error) : console.log(`Listening on port 3000`)
//   );
