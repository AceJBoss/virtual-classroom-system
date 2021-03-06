/**
 |----------------------------------
 | Api Route
 |----------------------------------
 */

const express = require("express");
const router = express.Router();
const con = require('../config/database.js');
const DeveloperController = require("../controllers/DeveloperController");



/**
 |----------------------
 | Basic  Api Routes
 |----------------------
 */
// welcome message
router.get('/', DeveloperController.welcomeAddress);

// get Classrooms
router.get('/classrooms', DeveloperController.getClassrooms);

// get specific Classroom
router.get('/spec_classroom/:id', DeveloperController.getSpecificClass);

// create or add new classroom
router.post('/create-classroom', DeveloperController.createClassroom);

// get Lecturers
router.get('/lecturers', DeveloperController.getLecturers);

// create or add new lecturers
router.post('/create-lecturer', DeveloperController.createLecturer);

// create a new Student
router.post('/create-student', DeveloperController.createStudent);

// get Students
router.get('/students', DeveloperController.getStudents);


module.exports = router;