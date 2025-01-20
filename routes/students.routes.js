const express = require("express");

const  router = express.Router();

const  {createStudent} = require("../controllers/students.controller")
router.post("./create/students", createStudent)
module.exports = router