const express = require("express");
const  router = express.Router();

const { createUserController} = require("../controllers/users.controller")
router.post("./create/users", createUserController)
module.exports = router