const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const Plant = require('./models')
const plantController = require('./controllers/PlantController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('plants everywhere')
})

app.post('/plants', plantController.createPlant)

app.get('/plants', plantController.getAllPlants)

app.get('/plants/:id', plantController.getPlantById)

app.put('/plants/:id', plantController.updatePlant)

app.delete('/plants/:id', plantController.deletePlant)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
