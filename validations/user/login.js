const { validate, Joi } = require('express-validation')
const loginValidation = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
}

module.exports = validate(loginValidation, {}, {})
