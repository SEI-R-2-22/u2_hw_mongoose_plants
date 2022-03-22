const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/plants/:id', controllers.getPlantById)

router.post('/plants', controllers.createPlant)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)
router.get('/plants', controllers.getAllPlants)
module.exports = router
