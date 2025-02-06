const Class = require("../models/class");

const  createClass= async(ClassData) =>{
    const classData = new Class(ClassData);
    return Class.save();
}

  const getAllClass = async () => {
        try {
            const classData = await Class.find();
            return classData;
        } catch (errors) {
            console.log(errors);
        }
    }
    const getClassById = async(Id) => {
        try {
            const classData = await Class.findById({ Id });
    
            if (!classData) {
                console.log('Class not found');
                return null;
            }
    
            return classData;
        } catch (errors) {
            console.log(errors);
        }
    }

    const deleteClass = async (Id) => {
        try {
            const classData = await Class.findByIdAndDelete(Id); 
            if (!classData) {
                throw new Error('Class not found');
            }
    
            return ; classData
        } catch (error) {
            console.log(error);
            
        }
    };
    
    const updateClass = async (Id) => {
        try {
            const classData = await Class.findByIdAndUpdate(Id); 
            if (!classData) {
                console.log('Class not found');
    
            }
    
            return student; 
        } catch (error) {
            console.log(error);
        }
    };

module.exports= {
    createClass,
    deleteClass,
    getClassById,
    getAllClass,
    updateClass
}