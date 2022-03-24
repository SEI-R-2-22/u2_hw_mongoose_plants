const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants/:id', controllers.getPlantById)

module.exports = router;

router.get('/', (req, res) => res.send('Welcome to the Root!'))

router.get('/plants', controllers.getAllPlants)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router;