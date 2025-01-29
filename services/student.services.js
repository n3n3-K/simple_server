const Students = require("../models/Students");

// ToDo: finish up on students services, getAll, getById, delete, update 

const  createStudent= async(StudentData) =>{
    const Student = new Students(StudentData);
    return Student.save();
}

  const getAllStudents = async () => {
        try {
            const students = await Students.find(studentData);
            return students;
        } catch (errors) {
            console.log(errors);
        }
    }
    const getStudentById = async() => {
        try {
            const student = await Students.findOne({ email });
    
            if (!student) {
                console.log('Student not found');
                return null;
            }
    
            return student;
        } catch (errors) {
            console.log(errors);
        }
    }

    const deleteStudent = async () => {
        try {
            const student = await Students.findByIdAndDelete(id); 
            if (!student) {
                throw new Error('Student not found');
            }
    
            return student; 
        } catch (error) {
            console.log(error);
            
        }
    };
    
    const updateStudent = async (id) => {
        try {
            const student = await Students.findByIdAndUpdate(id); 
            if (!student) {
                console.log('Student not found');
            }
    
            return student; 
        } catch (error) {
            console.log(error);
        }
    };

module.exports={
    createStudent,
    deleteStudent,
    getStudentById,
    getAllStudents,
    updateStudent
}