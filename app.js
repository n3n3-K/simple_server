const express = require('express')
const dotenv = require("dotenv")
dotenv.config()



const routeV1 = require("./routes/index")


const { handleValidationError, errorHandler } = require("./middleware/errorHandler")


const app = express() 


// Middleware to parse JSON bodies (important for POST and PUT requests)
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// versioning control - v1, v2 of the APIs
app.use(routeV1)

module.exports = app