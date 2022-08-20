const { UserModel } = require('../../models')
const checkUserTokenService = async (id) => {
    try {
        const query = await UserModel.findById(id).exec()
        if (query) return true
        return false
    } catch (err) {
        return err.message
    }
}

module.exports = checkUserTokenService
