const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));
router.post('/plants', controllers.createPlant);
router.get('/plants', controllers.getAllPlants)

module.exports = router;