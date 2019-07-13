const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tutorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School' 
    }
});

let tutorModel = mongoose.model('Tutor', tutorSchema);

module.exports = tutorModel;