const { createUser, getAllUsers, getUserByEmail, getUser, updateUser, deleteUser } = require("../services/user.services")


const createUserController = async (req, res) => {
    try {
        const userData = req.body 
        const user = await createUser(userData)

        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createUserController
}
