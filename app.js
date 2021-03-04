const express = require("express");
const app = express();
const dbConnector = require("./dbConnector/dbConnector");
const router = require("./routes/routes");
const bodyParser = require("body-parser");

// Body Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/routes/", router);

// Listen at port 3000
const port = 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Running at http://%s:%s", host, port);
});
