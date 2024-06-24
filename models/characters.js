const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    enemy: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    }
}, { timestamps: true });

const Character = mongoose.model('members', characterSchema);

module.exports = Character;