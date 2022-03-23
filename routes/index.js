const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
    res.send('This is root!')
})



router.post('/plant', controllers.createPlant)
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)
module.exports = router

// 623a56f8a4c47691538b9625 
// 623a56660590a6cc90b8ae51
// 623a532dbc18c29257bcb8ff