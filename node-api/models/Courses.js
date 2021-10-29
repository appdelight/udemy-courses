const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    poster: String,
    status: Number,
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('Courses', courseSchema)