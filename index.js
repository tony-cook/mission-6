const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()

const data = require('./data.json')

const Property = require('./models/property-model')
const db = require('./db')
const propertyRouter = require('./routes/property-router')
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function CheckDataExists (req, res) {
    await Property.find({}, (err, property) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!property.length) {
            Property.insertMany(data).then(function(){
                console.log("Existing data added to database")
            }).catch(function(error){
                console.log(error)
            });
        }
    }).clone().catch(err => console.log(err))
}

CheckDataExists()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', propertyRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))