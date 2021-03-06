const express = require('express');
const router = express.Router();
const courseSubjectsController = require('../controller/CourseSubjectsController');

router.get('/findByName/:courseName', courseSubjectsController.findCourseSubjectsByCategory);

router.get('/findBySemester/:courseName/:semesterNumber', courseSubjectsController.findCourseSubjectsBySemester);

router.post('/addNewSubjects', courseSubjectsController.addCourseSubjects);

module.exports = router;