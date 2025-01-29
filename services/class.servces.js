const Class = require("../models/class");

const  createClass= async(ClassData) =>{
    const classData = new Class(ClassData);
    return Class.save();
}

  const getAllClass = async () => {
        try {
            const classData = await classData.find(classData);
            return classData;
        } catch (errors) {
            console.log(errors);
        }
    }
    const getClassById = async() => {
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

    const deleteClass = async () => {
        try {
            const classData = await classData.findByIdAndDelete(id); 
            if (!classData) {
                throw new Error('Class not found');
            }
    
            return ; classData
        } catch (error) {
            console.log(errors);
            
        }
    };
    
    const updateClass = async (id) => {
        try {
            const classData = await ClassData.findByIdAndUpdate(id); 
            if (!classData) {
                console.log('Class not found');
    
            }
    
            return student; 
        } catch (error) {
            console.log(errors);
        }
    };

module.exports= {
    createClass,
    deleteClass,
    getClassById,
    getAllClass,
    updateClass
}