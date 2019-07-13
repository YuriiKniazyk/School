const mongoose = require('mongoose');
const config = require('../config');
const studentModel = require('../../DataBase/studentSchema');

module.exports = async (req, res) => {
    try{ 
        const {name, data, tutor} = req.body;

        const student = {name, data, tutor};
            
        var newStudent = new studentModel({
            _id: new mongoose.Types.ObjectId(),
            name: student.name,
            data: student.data,
            tutor: student.tutor
        });

        await studentModel.findOne({name: req.body.name})
        .exec(function(err, student) {
            if (!student) {
                studentModel.create(newStudent);  
            } 
        });
        
        res.status(200).json({succses: true});
    } 
    catch(e){
        console.log(e);
    }
};