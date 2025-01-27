const Student = require('../models/Students')
const handleValidationError = ( '../middleware/errorHandler')

const createStudent = async (req, res) => {
    try {
        const { studentName, registrationNumber, grade } = req.body;

        if (!studentName || !registrationNumber || !grade)   {
            handleValidationError("Please fill in all fields")
        }
        
        const newStudent = await Student.create({
            studentName,
            registrationNumber,
            grade
        })

        res.status(200).json({
            message: "Student created successfully",
            student: newStudent
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating student" })
        }
}
const getStudentProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await getStudent(email, userData)

        res.status(200).json({ message: 'User found', student });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllStudentProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await getAllStudent(email, userData)

        res.status(200).json({ message: 'Students found', student });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateStudentProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await updateStudent(email, userData)

        res.status(200).json({ message: 'Student updated successfully', student });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteStudentProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await updateStudent(email, userData)

        res.status(200).json({ message: 'Student updated successfully', student });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createStudent
    getStudentProfile
}