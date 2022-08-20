const { SubmitModel, UserModel } = require('../../models')
const getSubmitsService = async (questionId) => {
    try {
        const fetchSubmit = await SubmitModel.find({
            questionId: questionId,
            status: true,
        })
            .sort({ updatedAt: 'asc' })
            .limit(5)
            .exec()
        let data = []
        for (let i = 0; i < fetchSubmit.length; i++) {
            const element = fetchSubmit[i]
            let userQuery = await UserModel.findById({ _id: element.userId })
            const obj = {
                name: userQuery.name,
                status: element.status,
                result: element.result,
                sourceCode: element.sourceCode,
            }
            data.push(obj)
        }
        return data
    } catch (err) {
        return err.message
    }
}

module.exports = getSubmitsService
