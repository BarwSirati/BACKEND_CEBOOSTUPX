const { QuestionModel } = require('../../models')
const addQuestionService = async (data) => {
    try {
        const query = new QuestionModel(data)
        return query.save()
    } catch (err) {
        return err.message
    }
}

module.exports = addQuestionService
