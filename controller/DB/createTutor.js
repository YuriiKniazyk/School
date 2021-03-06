const mongoose = require('mongoose');
const config = require('../config');
const tutorModel = require('../../DataBase/tutorSchema');

module.exports = async (req, res) => {
    try{ 
        const {name, school} = req.body;

        const tutor = {name, school};
         
        var newTutor = new tutorModel({
            _id: new mongoose.Types.ObjectId(),
            name: tutor.name,
            school: tutor.school 
        });

        await tutorModel.findOne({name: req.body.name})
        .exec(function(err, tutor) {
            if (!tutor) {
                tutorModel.create(newTutor);  
            } 
        });
    
        res.status(200).json({succses: true});
    } 
    catch(e){
        console.log(e);
    }
};