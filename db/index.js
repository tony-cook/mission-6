const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
    console.log('Database connected successfully');


const db = mongoose.connection

module.exports = db