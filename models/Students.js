const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
});

module.exports = mongoose.model("Students", studentSchema)
