const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root!'))
router.put('/plants/:id', controllers.updatePlant)
router.post('/plants', controllers.createPlant)
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)
router.delete('/plants/:id', controllers.deletePlant)

module.exports = router
