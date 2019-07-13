const studentModel = require('../DataBase/studentSchema');
const mongoose = require('mongoose');
const config = require('./config');

module.exports = async (req, res) => {
    try{     
        let id = req.params.tutorid
        
        // await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            // if (err) throw err;
                            
            await studentModel.find({tutor: id})
            .limit(20)
            .exec(function(err, students) {
                if (err) throw err;
                if (!students) {
                    students = [];
                    res.json(students);
                } else {
                    res.json(
                        students.map((item)=>{
                            return { 
                                _id: item._id,
                                name: item.name,
                                data: item.data,
                                dataInMiliseconds: item.data.getTime(),
                                tutor: item.tutor
                            }
                        })
                    );
                }
            });
        // })     
     
    } catch (e) {
        console.log(e);
    }
};