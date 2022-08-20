const { UserModel } = require('../../models')

const getScoreBoardService = async () => {
    try {
        const query = await UserModel.find({ role: { $ne: 'admin' } })
            .select('-_id -password -username -role -__v')
            .sort({ score: 'desc' })
        const leaderBoard = []
        for (let i = 0; i < query.length; i++) {
            const userScore = {}
            userScore.num = query[i].score === 0 ? 'UNRANKED' : i + 1
            userScore.name = query[i].name
            userScore.group = query[i].group
            userScore.score = query[i].score
            userScore.finished = query[i].finished
            leaderBoard.push(userScore)
        }
        return leaderBoard
    } catch (err) {
        return err.message
    }
}

module.exports = getScoreBoardService
