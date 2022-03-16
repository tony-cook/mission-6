const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema(
    {
        type: { type: String, required: false },
        suburb: { type: String, required: false },
        location: { type: String, required: false },
        price: { type: Number, required: false },
    }
)

module.exports = mongoose.model('property', Property)