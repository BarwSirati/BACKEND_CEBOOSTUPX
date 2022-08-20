const { validate, Joi } = require('express-validation')

const addSubmitValidation = {
    body: Joi.object({
        userId: Joi.string().required(),
        questionId: Joi.string().required(),
        status: Joi.boolean().required(),
        result: Joi.string().required(),
        sourceCode: Joi.string().required(),
        score: Joi.number().required(),
    }),
}

module.exports = validate(addSubmitValidation, {}, {})
