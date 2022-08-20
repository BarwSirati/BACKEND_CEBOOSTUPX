const { validate, Joi } = require('express-validation')
const addQuestionValidation = {
    body: Joi.object({
        number: Joi.number().required(),
        title: Joi.string().required(),
        unit: Joi.string().required(),
        input: Joi.object().required(),
        output: Joi.object().required(),
        rank: Joi.number().required(),
        issuer: Joi.allow(),
        detail: Joi.allow(),
        detail_input: Joi.allow(),
        detail_output: Joi.allow(),
        note: Joi.allow(),
        image: Joi.allow(),
        ex_input: Joi.allow(),
        ex_output: Joi.allow(),
        status: Joi.allow(),
        finished: Joi.allow(),
    }),
}

module.exports = validate(addQuestionValidation, {}, {})
