const mongoose = require('mongoose')
const PlantSchema = require('./Plant')

const Plant = mongoose.model('Plant', PlantSchema)

module.exports = Plant
