const express = require('express');
const router = express.Router();

const coursesRouter = require("./courses.router")
const lessonsRouter = require('./lessons.router');


router.use('/courses', coursesRouter);
router.use('/lessons', lessonsRouter);

module.exports = router;