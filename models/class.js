const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classSchema =  new Schema({
    grade: {type: String, required: true} // Todo: add more details about a class, teacher, streams, number of students in a class etc...
})

module.exports = mongoose.model("Classes", classSchema)