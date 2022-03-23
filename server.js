const express = require('express');
const routes = require('./routes');
const db = require('./db');

// requied SO that we can handle req.body POST requests
const bodyParser = require('body-parser'); 
// Required for better SQL logging:
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(bodyParser.json()); // required to work with 
app.use(logger('dev'));

app.use('/api', routes);

db.on('error', console.error.bind(console.Console, "<<server.js>> ERROR - MongoDB Connection error: "));

app.listen(PORT, () => console.log(`<<server.js>> Listening on port ${PORT}`))