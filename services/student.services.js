const Students = require("../models/Students");

function createStudent(StudentData) {
    const Student = new Student(StudentData);
    return Student.save();
}