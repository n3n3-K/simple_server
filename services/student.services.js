const Students = require("../models/Students");

// ToDo: finish up on students services, getAll, getById, delete, update 

function createStudent(StudentData) {
    const Student = new Student(StudentData);
    return Student.save();
}

