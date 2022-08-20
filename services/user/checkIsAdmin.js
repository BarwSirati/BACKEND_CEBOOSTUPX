const { UserModel } = require('../../models')
const checkIsAdmin = async (data) => {
    try {
        const query = await UserModel.findOne({
            username: data.username,
        }).exec()
        if (query.role === 'admin') return true
        return false
    } catch (err) {
        return err.message
    }
}

module.exports = checkIsAdmin
