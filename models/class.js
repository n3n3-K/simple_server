const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classSchema =  new Schema({
    grade: {type: String, required: true}, // Todo: add more details about a class, teacher, streams, number of students in a class etc...
    teacher: {type:String, required:true},
    streamCode:{ type:String, required:true},
    streams: {type:String, required:true},
    numberOfStudents: {type:number, required:true},
    classTeacher: {type:String, required:true }

})


module.exports = mongoose.model("Classes", classSchema)