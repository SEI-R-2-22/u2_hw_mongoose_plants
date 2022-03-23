const Plant = require('../models/plants');

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPlants = async (request, response) => {
    try{
        const plants = await Plant.find()
        return response.status(200).json({ plants })
    }catch (error){
        return response.status(500).send(error.message)
}
}



const getPlantById = async (request, response) => {
    try{ 
        const { id } = request.params
        const plant = await Plant.findById(id)
        if (plant) {
            return response.status(200).json({ plant })
        }
        return res.status(404).send('Plant with this ID not found')
    }catch (error) {
        return response.status(500).send(error.message)
    }
}

const updatePlant = async (request, response) => {
    try {
        const { id } = request.params;
        await Plant.findByIdAndUpdate(id, request.body, { new: true }, (err, plant) => {
            if (err) {
                response.status(500).send(err);
            }
            if (!plant) {
                response.status(500).send('Plant not found!');
            }
            return response.status(200).json(plant);
        })
    } catch (error) {
        return response.status(500).send(error.message);
    }
}

const deletePlant = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send("Plant deleted");
        }
        throw new Error("Plant not found");
    } catch (error) {
        return response.status(500).send(error.message);
    }
}

module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant
}