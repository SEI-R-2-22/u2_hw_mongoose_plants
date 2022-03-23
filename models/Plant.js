const { Schema } = require('mongoose')

const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = Plant
