const { UserModel } = require('../../models')

const updateScoreService = async (data, id) => {
    const update = await UserModel.findByIdAndUpdate(id, data)
    return update
}

module.exports = updateScoreService
