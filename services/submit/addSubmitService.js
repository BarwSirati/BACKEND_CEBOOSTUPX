const getSubmitService = require('./getSubmitService')
const { getQuestionService, updateQuestionService } = require('../question')
const { updateScoreService, getUserService } = require('../user')
const { SubmitModel } = require('../../models')
const addSubmitService = async (data) => {
    try {
        const checkSubmitExist = await getSubmitService(
            data.questionId,
            data.userId
        )
        const getQues = await getQuestionService(data.questionId)
        const getUser = await getUserService(data.userId)
        let userScore = getUser.score
        let userFinished = getUser.finished
        let quesFinished = getQues.finished
        if (checkSubmitExist) {
            await SubmitModel.findByIdAndUpdate(checkSubmitExist._id, data)
            if (data.status && !checkSubmitExist.status) {
                userScore += data.score
                userFinished++
                quesFinished++
            } else if (!data.status && checkSubmitExist.status) {
                userScore -= getQues.rank * 100
                userFinished--
                quesFinished--
            }
        } else {
            await new SubmitModel(data).save()
            if (data.status) {
                userScore += data.score
                userFinished++
                quesFinished++
            }
        }
        await updateQuestionService(data.questionId, { finished: quesFinished })
        await updateScoreService(
            { score: userScore, finished: userFinished },
            data.userId
        )
    } catch (err) {
        return err.message
    }
}

module.exports = addSubmitService
