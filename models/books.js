var mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    genere: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Books', BookSchema);