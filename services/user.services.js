
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
    addUsers
    updateUser
} 



