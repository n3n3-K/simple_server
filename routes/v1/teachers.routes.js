const express = require('express');
const router = express.Router();


const { createTeacher, deleteTeacherProfile, getAllTeachersProfile, getTeacherProfile, } = require('../../controllers/teacher.controller')


router.post('/create/new-teacher', createTeacher)
router.get("/all/teachers", getAllTeachersProfile) // ToDo finish up on the route importations


module.exports = router