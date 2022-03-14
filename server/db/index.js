const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
    console.log('Database created successfully')

const db = mongoose.connection

module.exports = db