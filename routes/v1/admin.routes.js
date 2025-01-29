// ToDo finish up on the route importations
const express = require('express');
const router = express.Router();


const { createAdminProfile, getAdminProfile, getAllAdminProfiles, updateAdminProfile, deleteAdminProfile } = require("../../controllers/admin.controller")
const { authenticateRequest, } = require("../../middleware/auth.middleware")



router.post("/create/admin", authenticateRequest, createAdminProfile)
router.get("/get/admin/:email", authenticateRequest, getAdminProfile)
router.get("/get/all/admin", authenticateRequest,getAllAdminProfiles)
router.put("/update/admin/:email", authenticateRequest, updateAdminProfile)
router.delete("/delete/admin/:email", authenticateRequest, deleteAdminProfile) 

module.exports = router
