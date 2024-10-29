const { createTeacher, getAllTeachers, getTeacherByEmail, getTeacher, updateTeacher, deleteTeacher } = require("../services/teacher.services")


const createTeachersController = async (req, res) => {
    try {
        const TeacherData = req.body 
        const teacher = await createTeacher(TeacherData)

        res.status(201).json({ message: 'Teacher created successfully', Teacher });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createTeachersController
}
