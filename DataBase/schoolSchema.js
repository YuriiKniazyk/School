const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    }
});

let schoolModel = mongoose.model('School', schoolSchema);

module.exports = schoolModel;