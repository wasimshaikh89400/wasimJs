var http = require("http");
// obj = import 'module Name'
var server = http.createServer(function (req, res) {
  //write code here
  res.write("<h1>Hello from server...!</h1>");
});
server.listen(5000); // client port
