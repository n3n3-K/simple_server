const express = require("express");
const  router = express.Router();

const { createTeacher} = require("../controllers/teachers.controller.js")
router.post("./create/teachers", createTeacher)
module.exports = router