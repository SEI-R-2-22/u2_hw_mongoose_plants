const mongoose = require('mongoose');
const Plant = require('../models/plant');

// CONTROLLER: CREATE A PLANT ENTRY
const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body);
    await plant.save();
    return res.status(201).json({
      plant,
    });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

// CONTROLLER: GET *ALL* PLANT ENTRIES
const getAllPlants = async (req, res) => {
  try {
    const plantList = await Plant.find();
    return res.status(200).json({plantList})
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

//CONTROLLER: FIND A SPECIFIC PLANT ENTRY
const findPlantById = async (req,res) => {
  try {
    const {id} = req.params;
      //Error check:
      if (!mongoose.isValidObjectId(id)) throw Error ("Not a valid ObjectId");
    
    const thisPlant = await Plant.findById(id);
      //Error check:
      if (!thisPlant) return res.status(404).send(`Cannot find plant with ID ${id}.`);
    //SUCCESS:
    return res.status(200).json( thisPlant );
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

//CONTROLLER: UPDATE PLANT ENTRY
const updatePlant = async (req, res) => {
  try {
    const {id} = req.params;
    //Error check:
    if (!mongoose.isValidObjectId(id)) throw Error ("Not a valid ObjectId");
    
    


    const plant = await Plant.findByIdAndUpdate(id, req.body, {new:true})
    //Error check: 
    if (!plant) throw Error (`UPDATE cannot find a single plant with ID: ${id}!`);
        
    //OR: SUCCESS!
    return res.status(200).json(plant); 
      
    
  } catch(err) {
    return res.status(500).send(`Final UPDATE error is ${err.message}`);
  }
}

//CONTROLLER: DELETE PLANT ENTRY
const deletePlant = async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.isValidObjectId(id)) throw Error ("Not a valid ObjectId");

    const exPlant = await Plant.findByIdAndDelete(id);
    if (exPlant) {
      return res.status(200).send(`Plant with ID ${id} was DELETED!`);
    }
    throw new Error("ERROR! It seems the Plant was not found.")
  } catch(err) {
    return res.status(500).send(err.message);
  }
}


module.exports = {
  createPlant,
  getAllPlants,
  findPlantById,
  updatePlant,
  deletePlant
}