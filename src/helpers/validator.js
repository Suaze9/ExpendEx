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

const validCat = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(50).required(),
    });
    return schema.validate(body);
}

const validType = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(50).required(),
        category: Joi.string().required(),
    });
    return schema.validate(body);
}

module.exports.validReg = validReg;
module.exports.validLog = validLog;
module.exports.validCat = validCat;
module.exports.validType = validType;
