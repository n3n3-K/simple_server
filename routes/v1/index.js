const express = require("express")
const routing = express.Router()

// v1 routes imports
const authRoutes = require("./auth.routes")
const usersRoutes = require("../users.route")
const teachersRoutes = require("../teachers.routes")
const classesRoutes = require("./classes.routes")
const studentsRoutes = require("./students.routes")
const urlRoutes = require("./url.routes")

// main app routes
routing.use('/api/v1/auth',authRoutes);
routing.use('/api/v1/users', usersRoutes);
routing.use('/api/v1/classes', classesRoutes);
routing.use('/api/v1/teachers', teacherRoutes);
routing.use('/api/v1/admin', adminRoutes);
routing.use('/api/v1/url', urlRoutes);


// admin routes


module.exports = routing
