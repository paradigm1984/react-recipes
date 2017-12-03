"use strict";
var path = require("path");


const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("App running on port: " + port);
});
