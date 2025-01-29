const express = require('express');
const router = express.Router();


const { createTeacher, deleteTeacherProfile, getAllTeachersProfile, getTeacherProfile,updateTeacherProfile } = require('../../controllers/teacher.controller')
const { authenticateRequest, } = require("../../middleware/auth.middleware")


router.post("/create/teacher", authenticateRequest, createTeacherProfile,)
router.get("/get/teacher/:email", authenticateRequest, getTeacherProfile,)
router.get("/get/all/teacher", authenticateRequest,getAllTeacherProfiles,)
router.put("/update/teacher/:email", authenticateRequest, updateStudentProfile,)
router.delete("/delete/teacher/:email", authenticateRequest, deleteTeacherProfile,) 


module.exports = router