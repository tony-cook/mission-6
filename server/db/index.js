const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://test:test@cluster0.qqjpd.mongodb.net/mydb?retryWrites=true&w=majority", { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
    console.log('Database connected successfully');


const db = mongoose.connection

module.exports = db