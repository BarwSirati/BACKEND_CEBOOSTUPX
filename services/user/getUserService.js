const { UserModel, QuestionModel, SubmitModel } = require('../../models')

const getUser = async (id) => {
    return UserModel.findOne({ _id: id }).select('-password').exec()
}

const userRanking = async (id) => {
    let allUsers = []
    allUsers = await UserModel.find()
        .select('-password')
        .sort({ score: 'desc' })
    let ranking = allUsers.findIndex(
        (allUser) => String(allUser._id) === String(id)
    )
    return ranking + 1
}

const getPassed = async (id) => {
    return await SubmitModel.find({ userId: id, status: true }).count()
}

const getQuestion = async () => {
    return await QuestionModel.find().count()
}

const getProgress = async (id) => {
    const countQuestion = await getQuestion(id)
    const countPass = await getPassed(id)
    if (countQuestion === 0 && countPass === 0) {
        return Number(0).toFixed(2)
    }
    return ((Number(countPass) * 100) / Number(countQuestion)).toFixed(2)
}

const getUserService = async (id) => {
    try {
        const [user, ranking, progress] = await Promise.all([
            getUser(id),
            userRanking(id),
            getProgress(id),
        ])
        if (user) {
            const userData = {
                id: user._id,
                name: user.name,
                username: user.username,
                score: user.score,
                group: user.group,
                finished: user.finished,
                rank: user.score == 0 ? 'UNRANKED' : ranking,
                progress: progress,
            }
            return userData
        }
    } catch (err) {
        return err.message
    }
}

module.exports = getUserService
