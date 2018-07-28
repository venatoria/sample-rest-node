// index.js
// Main API file.. starts it all
// Initial script and routes definitions goes here

// =============================================================================
//                                 BASE SETUP
// =============================================================================

// Let's define the basics : Express, the app object and the parser.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Let's link the app object to the bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Let's define the basic router object
var router = express.Router();

// =============================================================================
//                                 And our API
// =============================================================================

//Get the call for the DB functions
let db = require("./db");

// Endpoint that submits info about a device
router.route('/store/:DeviceID/:DeviceName/:BatteryStatus/:Longitude/:Latitude').post(function(req, res) {
     db.setDevice(req, res);
});

// Endpoint that query the records for a device (given the ID)
router.route('/query/:DeviceID').get(function(req, res) {
     db.getDevice(req, res);
});

//Define base api call
app.use('/api', router);

// =============================================================================
//                                 SERVER and EXPOSURE
// =============================================================================

// We will be using the port 8080
var port = process.env.PORT || 8080;

// Let's fire up the server ;)
app.listen(port);
console.log('Sample RESTful Node JS API is running.. and it happens on localhost:' + port);

//Export for test units to see
module.exports = app;
