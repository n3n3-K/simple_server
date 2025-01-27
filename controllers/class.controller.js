const Class = require('../models/Class')
const  handleValidationError =  ('../middleware/errorHandler')

const createClass = async (req, res) => {
    try {
        const {  grade } = req.body;

        if ( !grade)   {
            handleValidationError("Please fill in all fields")
        } // $ && > < == logic
        
        const newClass = await Class.create({
            grade
        })

        res.status(200).json({
            message: "Student created successfully",
            class: newClass
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
        }
}

const createClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await getClass(email)

        res.status(200).json({ message: 'Class gotten successfully', class });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getAllClassProfiles = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await getAllClass(email)

        res.status(200).json({ message: 'Class gotten successfully', class });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updateClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await updateClass(email)

        res.status(200).json({ message: 'Class updated successfully', class });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await deleteClass(email)

        res.status(200).json({ message: 'Class deleted successfully', class });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports= {
    createClass
}