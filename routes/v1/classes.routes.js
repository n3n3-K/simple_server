const express = require('express');
const router = express.Router();

// ToDo finish up on the route importations



const { createClassProfile, getClassProfile, getAllClassProfiles, updateClassProfile, deleteClassProfile } = require("../../controllers/class.controller")
const { authenticateRequest, } = require("../../middleware/auth.middleware")



router.post("/create/class", authenticateRequest, createClassProfile)
router.get("/get/class/:email", authenticateRequest, getClassProfile)
router.get("/get/all/class", authenticateRequest,getAllClassProfiles,)
router.put("/update/class/:email", authenticateRequest, updateClassProfile)
router.delete("/delete/class/:email", authenticateRequest, deleteClassProfile) 

module.exports = router