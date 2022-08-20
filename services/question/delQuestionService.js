const { QuestionModel } = require('../../models')

const delQuestionService = async (id) => {
    try {
        const query = await QuestionModel.findByIdAndDelete({ _id: id })
        return query
    } catch (err) {
        return err.message
    }
}
module.exports = delQuestionService
