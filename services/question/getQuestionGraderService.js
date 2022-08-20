const { QuestionModel } = require('../../models')

const getQuestionGraderService = async (id) => {
    try {
        const query = await QuestionModel.findOne({
            _id: id,
            status: true,
        }).exec()
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getQuestionGraderService
