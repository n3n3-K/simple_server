const Teachers = require("../models/Teacher")

// Todo: Add classes services on a separate file
// ToDo: finish up on students services, getAll, getById, delete, update 
// Change the function to arrow function i.e  const createTeacher = async() => {}
function createTeacher(teacherData) {
    const teacher = new Teachers(teacherData);
    return teacher.save();
}

module.exports = {createTeacher}