const express = require("express");
const { createTeacher } = require("../services/student.services");
const  router = express.Router();

const { createStudentContoller} = require("./controller/teacher.controller")
router.post("./create/teachers", createTeacherContoller)
module.exports = router