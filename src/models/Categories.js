const mongoose = require('mongoose');

const Category = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
});

module.exports = mongoose.model('Category', Category);
