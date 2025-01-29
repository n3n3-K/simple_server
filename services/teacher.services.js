const Teachers = require("../models/Teacher")

// Todo: Add classes services on a separate file
// ToDo: finish up on students services, getAll, getById, delete, update 
// Change the function to arrow function i.e  const createTeacher = async() => {}
const  createTeacher= async(teacherData)=> {
    const teacher = new Teachers(teacherData);
    return teacher.save();
}

    const getAllTeachers = async () => {
        try {
            const teachers = await Teachers.find(teacherData);
            return teachers;
        } catch (errors) {
            console.log(errors);
        }
    }
    const getTeacherById = async() => {
        try {
            const teacher = await Teachers.findOne({ email });
    
            if (!teacher) {
                console.log('Teacher not found');
                return null;
            }
    
            return teacher;
        } catch (errors) {
            console.log(errors);
        }
    }

    const deleteTeacher = async () => {
        try {
            const teacher = await Teachers.findByIdAndDelete(id); 
            if (!teacher) {
                console.log('Teacher not found');
            }
    
            return teacher; 
        } catch (error) {
            console.log(error);
            
        }
    };
    
    const updateTeacher = async (id) => {
        try {
            const teacher = await Teachers.findByIdAndUpdate(id); 
            if (!teacher) {
                console.log('Teacher not found');
            }
    
            return teacher; 
        } catch (error) {
            console.log(error);
        }
    };
    
        
    
    

module.exports = {
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById,
    getAllTeachers,

}