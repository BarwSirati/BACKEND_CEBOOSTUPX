const { validate, Joi } = require('express-validation')
const registerValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        group: Joi.number().required(),
        score: Joi.allow(),
        role: Joi.allow(),
        finished: Joi.allow(),
    }),
}

module.exports = validate(registerValidation, {}, {})
