const { UserModel } = require('../../models')
const bcrypt = require('bcryptjs')
const addUserService = async (data) => {
    try {
        const query = await UserModel.findOne({ username: data.username })
        if (!query) {
            const salt = bcrypt.genSaltSync(12)
            data.password = bcrypt.hashSync(data.password, salt)
            return new UserModel(data).save()
        }
        return { err: 'User Already Exist', statusCode: 409 }
    } catch (err) {
        return err.message
    }
}

module.exports = addUserService
