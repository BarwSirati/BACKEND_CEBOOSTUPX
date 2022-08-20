const { validate, Joi } = require('express-validation')
const updateValidation = {
    body: Joi.object({
        username: Joi.allow(),
        password: Joi.allow(),
        name: Joi.allow(),
    }),
}

module.exports = validate(updateValidation, {}, {})
