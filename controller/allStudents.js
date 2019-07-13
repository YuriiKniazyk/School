const studentModel = require('../DataBase/studentSchema');

module.exports = async (req, res) => {
    try{     
        let id = req.params.id
         
        res.json(await studentModel.find({tutor: id}));     
    } catch (e) {
        console.log(e);
    }
};