const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TeachersSchema =  new Schema({
    username: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone_number: {type: Number, required: true},  
    county: {type: String, required: true},
    country: {type: String, required: true},
    password: {type: String, required: true}, 
    role: {type: String, enum: ["user", "client", "guest", "admin", "superAdmin"], default: "user"}
    
})


module.exports = mongoose.model("Teachers", TeachersSchema)


