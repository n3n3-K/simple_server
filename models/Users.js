const mongoose = require('mongoose')// import mongoose module
const Schema = mongoose.Schema // mvc - Models, schema, view and controllers || logicoperators  (|| => or &&) - migration everytime you update sql model
const userschema = new Schema({
        // user- entity - attributes -first_name, last_name, email, phone_number, county, country, password, role
        //Datatypes - string, enum,{admin, user, guest, superadmin, client number},bool - {Yes, No}
         first_name: ({type: String, required: true}),
         last_name:  ({type: String, required: true}),
         email:  ({type: String, required: true, unique:true}),
         phone_number: ({type: Number, required: true}), //country code such +254 checking - backend level or frontend - select code 
         county: ({type: String, required: true}),
         country: ({type: String, required: true}),
         password: ({type: String, required: true}), 
         role: ({type: String, enum: ["user", "guest", "admin", "superadmin", "client"], default: "user"}),

})

   module.exports = mongoose.model("Users", userschema)