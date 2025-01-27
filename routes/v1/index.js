const express = require("express")
const routing = express.Router()

// v1 routes imports
const authRoutes = require("./auth.routes")
const usersRoutes = require("../users.route")
const teachersRoutes = require("../teachers.routes")


// main app routes
routing.use('/api/v1/auth',authRoutes);
routing.use('/api/v1/users', usersRoutes)
routing.use('/api/v1/classes', teachersRoutes)


// admin routes


module.exports = routing
