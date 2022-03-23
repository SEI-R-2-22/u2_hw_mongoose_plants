const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.get('/plants', controllers.getAllPlants);

router.get('/plants/:id', controllers.getPlantById);

router.post('/plants', controllers.createPlant);
// test plant id: 623a7e0d1e18ff2704c680ae

router.put('/plants/:id', controllers.updatePlant);
router.delete('/plants/:id', controllers.deletePlant);

module.exports = router;