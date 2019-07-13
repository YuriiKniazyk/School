const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    data: {
        type: Date 
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor'
    }
});

let studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;