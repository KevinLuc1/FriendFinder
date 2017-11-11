//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure Express
var app = express();
var PORT = process.env.PORT || 8000;

// Expose the public directory to access CSS files
// app.use(express.static(path.join(__dirname, './app/public')));

// bodyparser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
	console.log("app listening on PORT: " + PORT)
});