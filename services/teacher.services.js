const Teachers = require("../models/Teacher")

function createTeacher(teacherData) {
    const teacher = new Teachers(teacherData);
    return teacher.save();
}

module.exports = {createTeacher}