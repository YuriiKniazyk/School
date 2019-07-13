const tutorModel = require('../DataBase/tutorSchema');

module.exports = async (req, res) => {
    try{     
        let id = req.params.id
         
        res.json(await tutorModel.find({school: id}));     
    } catch (e) {
        console.log(e);
    }
};