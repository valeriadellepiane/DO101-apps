//var express = require('express');
const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {
  response = 'This is version 3 de la app'+'\n';
  //res.send('Hello World!\n');
  res.send(response);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

