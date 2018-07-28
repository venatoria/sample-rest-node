// db.js
// Database functions file..
// DB Operations goes here

// =============================================================================
//                                 DB and SCHEMA INIT
// =============================================================================

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Initial schema definitions
let deviceSchema = new Schema({DeviceID: String, DeviceName: String, BatteryStatus: String, Longitude: String, Latitude: String});

// Sets the createdAt parameter equal to the current time (the TimeStamp)
deviceSchema.pre('save', next => {
     if (!this.createdAt) {
          now = new Date();
          this.createdAt = now;
     }
     next();
});

//Define models
let Devices = mongoose.model('devices', deviceSchema);

//Load DB URI config
let config = require('config');

//DB Options
let options = {
     useMongoClient: true
};

//Load config
mongoose.connect(config.DBHost, options);

//Connect to DB
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// =============================================================================
//                                 DB FUNCTIONS
// =============================================================================

//
// Clean for test
//
function cleanTest() {
     deviceSchema.remove({}, (err, result) => {
          if (err) {
               res.send(err);
          }
     });
}

//
// Store the Device record
//
function setDevice(req, res) {
     // Let's proceed and store it
     var newDevice = new Devices(req.params);
     newDevice.save((err, result) => {
          if (err) {
               res.send(err);
          } else {
               res.json(result);
          }
     });
}

//
// Get stored device infos
//
function getDevice(req, res) {
     //Query the DB and if no errors, return device info
     let query = Devices.findOne({DeviceID: req.params.DeviceID});
     query.exec((err, result) => {
          if (err) {
               res.send(err);
          } else {
               if (result) {
                    res.json(result);
               } else {
                    res.json({
                         Message: 'No device found matching provided ID!'
                    });
               }
          }

     });
}

// =============================================================================
//                              EXPORT FUNCTIONS
// =============================================================================
module.exports = {
     getDevice,
     setDevice,
     cleanTest
}
