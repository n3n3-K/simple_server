const Class = require('../models/Class') // Todo: user the Class services.js file with functions like Create, getClasses
const handleValidationError =  ('../middleware/errorHandler')


// Todo: add more request body Items - i.e grade, streams, number of students, lessons, teacher(who is incharge for the class)
const createClass = async (req, res) => {
    try {
        const {  grade } = req.body;

        if ( !grade)   {
            handleValidationError("Please fill in all fields")
        } // $ && > < == logic
        
        const newClass = await Class.create({
            grade
        })

        res.status(200).json({
            message: "Student created successfully",
            class: newClass
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
        }
}

const createClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const classData = await getClass(email) // example here  

        res.status(200).json({ 
            message: 'Class gotten successfully', 
            data: classData
         }); // TODOFIX: error with tha appropiate data variable i.e data: classData

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getAllClassProfiles = async (req, res) => {
    try {
        const { email } = req.params
        const allClassData = await getAllClass(email)

        res.status(200).json({ 
            message: 'Class gotten successfully', 
            data: allClassData
         });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const class = await updateClass(email) 

        res.status(200).json({ 
            message: 'Class updated successfully', 
            class
         }); // TODOFIX: error with tha appropiate data variable i.e data: classData

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteClassProfile = async (req, res) => {
    try {
        const { email } = req.params
        const admin = await deleteClass(email)

        res.status(200).json({ 
            message: 'Class deleted successfully', 
            class 
        }); // TODOFIX: error with tha appropiate data variable i.e data: classData
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports= {
    createClass
}