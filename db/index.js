//require mongoose
const mongoose = require('mongoose');

let MONGODB_URI = 'mongodb://127.0.0.1:27017/plantsDatabase';

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
  console.log("<<db/index.js>> Hoorah! Connected to MongoDB!");
})
.catch((e) => {
  console.error("<<db/index.js>> Whoops! MongoDB connection Error: ", e.message);
})

const db = mongoose.connection;

module.exports = db;