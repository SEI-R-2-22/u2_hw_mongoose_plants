const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
router.get('/plants', controllers.getAllPlants)

router.get('/', (req, res) => res.send('This is root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants/:id', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router;

// "_id": "623a5c8efa0d7397f0711e3c",
//"_id": "623a5c8efa0d7397f0711e3c",