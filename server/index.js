const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const propertyRouter = require('./routes/property-router')

const port = 4000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', propertyRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))