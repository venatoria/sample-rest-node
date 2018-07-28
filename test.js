// test.js
// API test Units

// =============================================================================
//                            TEST/DEV BASE SETUP
// =============================================================================

//Let's set the env variable to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./index.js');
let db = require("./db");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

// =============================================================================
//                                TEST UNITS
// =============================================================================

// First let's empty any documents that may have been added in previous test
describe('Cleaning DB', () => {
     it('Should clean all records devices added in previous tests', (done) => {
          db.cleanTest();
          done();
     });
});

//
// Test POST
//
describe('/POST Device', () => {
     it('Should add Device 123 Test Device Full 100 100', (done) => {
          chai.request(app).post('/api/store/123/Test Device/Full/100/100').end((err, res) => {
               res.should.have.status(200);
               done();
          });
     });
});

//
//Test GET
//
describe('/GET device', () => {
     it('Should check if the device 123 is there using get', (done) => {
          chai.request(app).get('/api/query/123').end((err, res) => {
               expect(res.body.DeviceID).to.equal('123');
               done();
          });
     });
});
