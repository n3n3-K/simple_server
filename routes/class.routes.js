const express = require("express");

const  router = express.Router();

const { createClass} = require("../controllers/class.controller.js")
router.post("./create/class", createClass)
module.exports = router
