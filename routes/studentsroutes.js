const express = require("express");
const { createStudent } = require("../services/teacher.services");
const  router = express.Router();

const { createStudentContoller} = require("./controller/students.controller")
router.post("./create/students", createStudentContoller)
module.exports = router