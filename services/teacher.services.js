const Teachers = require("../models/Teachers")

function createTeacher(TeacherData) {
    const teacher = new teacher(teacherData);
    return teacher.save();
}