const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'))
// app.use() middleware here ^ ///////////////////

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))