var express = require("express");
var app = express();
var path = require("path");

app.use('/node_modules/', express.static(__dirname + '/node_modules/'));
app.use('/js/', express.static(__dirname + '/js/'));
app.use('/img/', express.static(__dirname + '/img/'));
app.use('/css/', express.static(__dirname + '/css/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);