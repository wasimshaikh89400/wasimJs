var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("write id in url ");
});
// var id    =   :id

// app.get("/:id", function (req, res) {
//   res.send("id : " + req.params.id);
// });

app.get("/:id/:name", function (req, res) {
  res.send("id : " + req.params.id + " name:  " + req.params.name);
  console.log(req.params);
});

app.listen(3000, function () {
  console.log("Server Started...");
});
