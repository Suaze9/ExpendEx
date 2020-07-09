const mongoose = require('mongoose');

const Post = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 50,
    },
    email: {
        type: String,
        required: true, 
        min: 3,
        max: 254,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', Post);

//WajPSWaNiGFAPlcn
//rootpassword190