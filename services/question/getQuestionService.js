const { QuestionModel } = require('../../models')

const getQuestionService = async (id) => {
    try {
        const query = await QuestionModel.findOne({
            _id: id,
            status: true,
        })
            .select('-input -output')
            .exec()
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getQuestionService
