const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()

const data = require('./data.json')

const Property = require('./models/property-model')
const db = require('./db')
const propertyRouter = require('./routes/property-router')
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
seedData()


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function seedData (req, res) {
    const propertiesCursor = Property.find({});

    const arePropertiesEmpty = (await propertiesCursor.count()) === 0;

    if(arePropertiesEmpty) {
        Property.insertMany(data).then(function(){
            console.log("Data added to database")
        }).catch(function(error){
            console.log(error)
        })
    }
}



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', propertyRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))