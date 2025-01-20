const express = require('express')
const dotenv = require("dotenv")
dotenv.config()



const teacherRoute = require('./routes/teachers.routes')
const studentRoute = require('./routes/students.routes')
const classRoute = require('./routes/class.routes')
// const authRoute = require('./routes/auth.routes')
const userRoute = require("./routes/users.routes")


const { handleValidationError, errorHandler } = require("./middleware/errorHandler")


const app = express() 


// Middleware to parse JSON bodies (important for POST and PUT requests)
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// versioning control - v1, v2 of the APIs
app.use("/api/v1/users", userRoute)
// app.use("/api/v1/auth", authRoute) 
app.use("/api/v1/class", classRoute)
app.use("/api/v1/student", studentRoute)
app.use("/api/v1/teacher", teacherRoute)




module.exports = app