const { SubmitModel } = require('../../models')
const getSubmitService = async (questionId, userId) => {
    try {
        const query = await SubmitModel.findOne({
            questionId: questionId,
            userId: userId,
        })
        .exec()
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getSubmitService
