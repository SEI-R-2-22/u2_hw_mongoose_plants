const Plant = require('../models/Plant')

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
    return res.status(201).json({ plants })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
    if (plant) {
      return res.status(200).json({ plant })
    } else {
      return res.status(404).send('Plant with the spcified ID does not exists!')
    }
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
    res.send(error.message)
  }
}

const deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id)
    if (plant) {
      return res.status(200).send('Plant deleted')
    }
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
