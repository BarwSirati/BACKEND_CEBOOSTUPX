const { UserModel } = require('../../models')

const getUsersService = async () => {
    try {
        const query = await UserModel.find().select('-_id -password').exec()
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getUsersService
