
const app = require('./app') 

const { connectDB } = require("./config/mongodb.config") // import db here

connectDB() // calling a function

// using the routes from userRoutes.js file


app.get("/", function(req, res) {
    res.send("Hello World!");
}) 


//  http:/localhost:3000 - //for creating a new user
// http:/localhost:3000/api/v1/users/all/users - //to get all users
//  http:/localhost:3000/api/v1/users/delete/:userId/user - param - userId




const PORT = process.env.PORT || 3000;
app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})


