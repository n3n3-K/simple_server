
const User = require("../models/Users")

function createUser(userData) {
    const user = new User(userData);
    return user.save();
}

    const getAllUsers = async () => {
        try {
            const users = await User.find();
            return users;
        } catch (errors) {
            console.log(errors);
        }
    }
    const getUserByEmail = async (email) => {
        try {
            const user = await User.findOne({ email });
    
            if (!user) {
                console.log('User not found');
                return null;
            }
    
            return user;
        } catch (errors) {
            console.log(errors);
        }
    }



// delete a user by ID
const findByIdAndDelete = async () =>{
    
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            console.log('User not found');
            return null;
        }
    
    } catch (error) {
        console.log( errors );
    }

}

// Function to add multiple users
 async function addUsers (userData){ 
    try {
        const result = await User.insertMany(userData);
        return result; 
    } catch (error) {
        console.log(errors);
         
    }
}
const updateUser = async (id, userUpdateData) =>{
    try{
        const user = await user.findByIdAndUpdate;
        return user;
    }
    catch(error){
        console.log(error);
        throw new Error('could not update user');
    }
    const deleteUser = async (id)
    
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
} 



const http = require('http'); // Correctly import the http module

// import db here
const { connectDB } = require("./config/config")

const { createUser, getAllUsers, getUserByEmail } = require("./controllers/users.controller")
connectDB()

// create the user data object
const createUser = {
    username: "n3n3",
    first_name: "David",
    last_name: "Nene",
    email: "nene.david.019@gmail.com",
    phone_number: "0796619346", // phone code (country code for our case its +254 - xxx-000)
    county: "Nairobi",
    country: "Kenya",
    password: "password12345"
}

const userId =

// createUser(newUser)
// .then(user => console.log("user uploaded to db", user))
// .catch(err => console.log("error uploading user to db", err))

getAllUsers()
.then(users => console.log("all users", users))
.catch(err => console.log("error fetching all users", err))

updateUser(userIdupdateUserData)


const email = newUser.email
getUserByEmail(email)
.then(user => {
    if (user) {
        console.log("user found", user)
    } else {
        console.log("user not found")
    }
})
.catch(err => console.log("error fetching all users", err)) 






