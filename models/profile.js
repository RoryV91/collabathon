const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const profileSchema = new Schema({
    name: {
        type: String, 
        required: true},
    location: {
        type: String, 
        },
    interests: {
        type: String,
        },
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Profile', profileSchema);