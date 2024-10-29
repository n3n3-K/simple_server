const express = require("express");
const { createUser } = require("../services/user.services");
const  router = express.Router();

const { createUserContoller} = require("./controller/user.controller")
router.post("./create/users", createUserContoller)
module.exports = router