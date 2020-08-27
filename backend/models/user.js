const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: String,
    marks: Object,
    rollNumber: String
})

module.exports = mongoose.model('user', User)