const Admin = require('../models/Admin')
const   handleValidationError= ("../middleware/errorHandler")

const adminSignup = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            handleValidationError("Please fill all the fields!")
        }

        const existingAdmin = await Admin.findOne({ email })
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists with this email!"
            })
        }

        
        const admin = await Admin.create({
            email,
            password
        })

        res.status(200).json({
            message: "Admin created successfully!",
            data: admin
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
            })
    }
}

const getAdminProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await getUser(email)

        res.status(200).json({ message: 'Admin gotten successfully', admin });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getAllAdminProfiles = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await getAllAdmin(email)

        res.status(200).json({ message: 'Admins gotten successfully', admin });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateAdminProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await updateAdmin(email)

        res.status(200).json({ message: 'Admin updated successfully', admin });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const deleteAdminProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await deleteAdmin(email)

        res.status(200).json({ message: 'Admin deleted successfully', admin });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports= {
    adminSignup
}