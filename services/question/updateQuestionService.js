const { QuestionModel } = require('../../models')

const updateQuestionService = async (id, data) => {
    try {
        const query = await QuestionModel.findOneAndUpdate({ _id: id }, data)
        return query
    } catch (err) {
        return err.message
    }
}
module.exports = updateQuestionService
