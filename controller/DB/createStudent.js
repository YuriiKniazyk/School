const mongoose = require('mongoose');
const config = require('../config');
const studentModel = require('../../DataBase/studentSchema');

module.exports = async (req, res) => {
    try{ 
        const {name,
            data,
            tutor} = req.body;

        const student = {
            name,
            data,
            tutor         
        };
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {

            if (err) throw err;       
            var newStudent = new studentModel({
                _id: new mongoose.Types.ObjectId(),
                name: student.name,
                data: student.data,
                tutor: student.tutor
            });
    
            await studentModel.find({name: req.body.name})
            .exec(function(err, tutor) {
                if (!student) {
                    studentModel.create(newStudent);  
                } 
            });
        })
        res.status(200).json({succses: true});
    } 
        catch(e){console.log(e);
    }
};