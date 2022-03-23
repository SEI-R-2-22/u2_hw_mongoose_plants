const mongoose = require('mongoose')

//setup connection
mongoose
  .connect('mongodb://127.0.0.1:27017/plantsDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connect error', e.message)
  })

const db = mongoose.connection

module.exports = db
