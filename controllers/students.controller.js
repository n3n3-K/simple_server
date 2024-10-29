const { createStudent, getAllStudents, getStudentByEmail, getStudent, updateStudent, deleteStudent } = require("../services/student.services")


const createstudentsController = async (req, res) => {
    try {
        const StudentData = req.body 
        const student = await createStudent(StudentData)

        res.status(201).json({ message: 'Student created successfully', student });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createstudentsController
}
