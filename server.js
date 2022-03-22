const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())

app.use('/api', routes);

db.on('error', console.error.bind(console, 'Some wierd stuff happened and you didn`t connect:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))