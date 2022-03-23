const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plant = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Plant', Plant)
