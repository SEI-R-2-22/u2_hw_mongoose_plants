const Plant = require('../models/plant')

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()
    return res.status(201).json({
      plant
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find()
    return res.status(200).json({ plants })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
    if (plant) {
      return res.status(200).json({ plant })
    }
    return res.status(404).send('Plant with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(plant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlant = async (req, res) => {
  try {
    const deleted = await Plant.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Plant deleted')
    }
    throw new Error('Plant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant
}
