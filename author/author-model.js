const { Schema, model } = require('mongoose');

const Author = new Schema({
    name: { type: String, required: true, unique: true }
})

module.exports = model('Author', Author);