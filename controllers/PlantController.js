const Plant = require('../models')

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()
    res.json({
      plant
    })
  } catch (e) {
    res.send({ error: e.message })
  }
}

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find()
    res.json(plants)
  } catch (e) {
    res.send('Nothing found')
  }
}

const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
    res.json(plant)
  } catch (e) {
    res.send('No plant found!', e.message)
  }
}

const updatePlant = async (req, res) => {
  try {
    const { id } = req.params
    const plant = await Plant.findByIdAndUpdate(id, req.body)
    res.send('plant updated ' + plant)
  } catch (e) {
    res.send(e.message)
  }
}

const deletePlant = async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id)
    res.send('Plant deleted')
  } catch (e) {
    res.send(e.message)
  }
}

module.exports = {
  getAllPlants,
  createPlant,
  getPlantById,
  updatePlant,
  deletePlant
}
