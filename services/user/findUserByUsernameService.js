const { UserModel } = require('../../models')
const findUserByUsernameService = async (username) => {
    try {
        const query = await UserModel.findOne({
            username: username,
        })
        .exec()
        if (query) return query
    } catch (err) {
        return err.message
    }
}

module.exports = findUserByUsernameService
