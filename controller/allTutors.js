const tutorModel = require('../DataBase/tutorSchema');
const mongoose = require('mongoose');
const config = require('./config');

module.exports = async (req, res) => {
    try{     
        let id = req.params.schoolid
         
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            await tutorModel.find({school: id})
            .exec(function(err, tutors) {
                if (err) throw err;
                if (!tutors) {
                    tutors = [];
                    res.json(tutors);
                } else {
                    res.json(
                        tutors.map((item)=>{
                            return { 
                                _id: item._id,
                                name: item.name,
                                school: item.school
                            }
                        })
                    );
                }
            });
        })     

    } catch (e) {
        console.log(e);
    }
};