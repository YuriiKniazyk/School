const mongoose = require('mongoose');
const config = require('../config');
const schoolModel = require('../../DataBase/schoolSchema');

module.exports = async (req, res) => {
    try{ 
        const {name, tutor} = req.body;

        const school = {name, tutor};
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {

            if (err) throw err;       
            var newSchool = new schoolModel({
                _id: new mongoose.Types.ObjectId(),
                name: school.name,
                tutor: school.tutor
            });
    
            await schoolModel.find({name: req.body.name})
            .exec(function(err, school) {
                if (!school) {
                    schoolModel.create(newSchool);  
                } 
            });
        })
        res.status(200).json({succses: true});
    } 
        catch(e){console.log(e);
    }
};