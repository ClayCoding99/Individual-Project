const mongoose = require('mongoose');

const UserScoresSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    score: {type: Number, default: 0}
});

const UserScores = mongoose.model('UserScores', UserScoresSchema);

module.exports = UserScores;