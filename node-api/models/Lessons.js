const mongoose = require('mongoose');

const courseLessonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    poster: String,
    videoUrl: String,
    courseId: String,
    lessonNumber: Number,
    status: Number,
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('Lessons', courseLessonSchema)