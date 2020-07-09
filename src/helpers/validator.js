const Joi = require('@hapi/joi');

const validReg = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).required(),
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).max(255).required(),
    });
    return schema.validate(body);
}

const validLog = (body) => {
    const schema = Joi.object({
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).max(255).required(),
    });
    return schema.validate(body);
}

module.exports.validReg = validReg;
module.exports.validLog = validLog;

/*

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

*/