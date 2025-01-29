const express = require('express');
const router = express.Router();


const { createStudentProfile, getStudentProfile, getAllStudentProfiles, updateStudentProfile, deleteStudentProfile } = require("../../controllers/student.controller")
const { authenticateRequest, } = require("../../middleware/auth.middleware")



router.post("/create/student", authenticateRequest, createStudentProfile)
router.get("/get/student/:email", authenticateRequest, getStudentProfile)
router.get("/get/all/student", authenticateRequest,getAllStudentProfiles,)
router.put("/update/student/:email", authenticateRequest, updateStudentProfile)
router.delete("/delete/student/:email", authenticateRequest, deleteStudentProfile) 

module.exports = router