
const User = require("../models/Users")

const createUser= async(userData)=> {
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
            const user = await User.findOne({ id });
    
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
const deleteUser = async () =>{
    
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            console.log('User not found');
            return user;
        }
    
    } catch (error) {
        console.log( error );
    }

}

// Function to add multiple users
 const addUsers= async  (userData) => { 
    try {
        const user = await User.insertMany(userData);
        return user; 
    } catch (error) {
        console.log(error);
         
    }
}
const updateUser = async (id, userUpdateData) =>{
    try{
        const user = await user.findByIdAndUpdate({id, userUpdate});
        return user;
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    addUsers,
    updateUser,
} 



