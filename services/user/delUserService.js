const { UserModel } = require('../../models')

const delUserService = async (id) => {
    try {
        const query = await UserModel.findByIdAndDelete({ _id: id })
        return query
    } catch (err) {
        return err.message
    }
}
module.exports = delUserService
