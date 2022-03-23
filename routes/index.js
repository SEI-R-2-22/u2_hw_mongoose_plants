const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
// ↑ We were doing something different in class...

router.get('/', (req,res) => res.send("This is (G)root!"));

router.post('/plants', controllers.createPlant);
router.get('/plants', controllers.getAllPlants);
router.get('/plants/:id', controllers.findPlantById);
router.put('/plants/:id', controllers.updatePlant);
router.delete('/plants/:id', controllers.deletePlant);



module.exports = router;