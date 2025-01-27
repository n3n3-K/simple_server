const Teacher= require('../models/Teacher')
const handleValidationError =  ('../middleware/errorHandler')

const createTeacher = async (req, res) => {
    try {
        const { teacherName, email, subject } = req.body;

        if (!teacherName || !email || !subject)   {
            handleValidationError("Please fill in all fields")
        // } || $ && > < == logic
        
        const newTeacher = await Teacher.create({
            teacherName,
            email,
            subject
        })

        res.status(200).json({
            message: "Teacher created successfully",
            teacher: newTeacher
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
            }
}

const getTeacherProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await getTeacher(email, userData)

        res.status(200).json({ message: 'Teacher found', teacher });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllTeachersProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await getAllTeachers(email, userData)

        res.status(200).json({ message: 'Teachers found', teacher });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateTeacherProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await updateTeacher(email, userData)

        res.status(200).json({ message: 'Teacher updated successfully', teacher });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTeacherProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await deleteTeacher(email, userData)

        res.status(200).json({ message: 'Teacher deleted successfully', teacher });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createTeacher,
    deleteTeacherProfile,
    getAllTeachersProfile,
    getTeacherProfile,
}
}
