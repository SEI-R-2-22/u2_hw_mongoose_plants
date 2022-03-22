const Plant = require('../models/plant')

const createPlant = async (request, response) => {
    try {
        const plant = await new Plant(request.body)
        await plant.save()
        return response.status(201).json({
            plant,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

const getAllPlants = async (request, response) => {
    try {
        const plants = await Plant.find()
        return response.status(200).json({ plants })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const getPlantById = async (request, response) => {
    try {
        const { id } = request.params;
        const plant = await Plant.findById(id)
        if (plant) {
            return response.status(200).json({ plant });
        }
        return response.status(404).send('Plant with the specified ID does not exists');
    } catch (error) {
        return response.status(500).send(error.message);
    }
}

const updatePlant = async (req, res) => {
    try {
        const { id } = req.params;
        await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!plant) {
                res.status(500).send('Plant not found!');
            }
            return res.status(200).json(plant);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePlant = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted");
        }
        throw new Error("Plant not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant
}