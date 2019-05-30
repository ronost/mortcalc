/**
 *
 *  getInterestRates()  '/api/interestrates'    GET
 *
 */


const db = require('./data/interestrates');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const multipleResponse = items => ({items: items});

// ******************************************************************
// REST Server
// ******************************************************************

let app = express();
    app.use(cors());
    app.use(bodyParser.json());


// ******************************************************************
// REST API
// ******************************************************************

/**
 * getInterestRates() RESTful endpoint
 */
app.get('/api/interestrates', function (req, res) {
  res.json(multipleResponse(db));
});

app.listen(4201, () => console.log('REST API running on port 4201'));
