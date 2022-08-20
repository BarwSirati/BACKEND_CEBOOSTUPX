const { UserModel } = require('../../models')
const bcrypt = require('bcryptjs')
const updateUserService = async (data, id) => {
    try {
        if (UserModel.findById(id)) {
            if (data.password) {
                const salt = bcrypt.genSaltSync(12)
                data.password = bcrypt.hashSync(data.password, salt)
            }
            return await UserModel.findByIdAndUpdate(id, data).exec()
        }
        return { err: 'NOT_FOUND_USER' }
    } catch (err) {
        return err.message
    }
}

module.exports = updateUserService
