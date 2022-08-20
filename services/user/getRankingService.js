const { UserModel } = require('../../models')

const getRankingService = async () => {
    try {
        const query = await UserModel.find({ role: { $ne: 'admin' } })
            .select('-_id -password -username -role -__v')
            .sort({ score: 'desc' })
            .limit(3)
            .exec()
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getRankingService
