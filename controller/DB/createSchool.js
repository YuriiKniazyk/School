const mongoose = require('mongoose');
const config = require('../config');
const schoolModel = require('../../DataBase/schoolSchema');

module.exports = async (req, res) => {
    try{ 
        const {name} = req.body;

        const school = {name};
             
        var newSchool = new schoolModel({
            _id: new mongoose.Types.ObjectId(),
            name: school.name
        });

        await schoolModel.findOne({name: req.body.name})
        .exec(function(err, school) {
            if (!school) {
                schoolModel.create(newSchool);  
            } 
        });

        res.status(200).json({succses: true});
    } catch(e) {
        console.log(e);
    }
};