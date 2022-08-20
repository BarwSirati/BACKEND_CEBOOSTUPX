const getUserService = require('./getUserService')
const getCurrentUserService = async (data) => {
    try {
        const query = await getUserService(String(data.id))
        return query
    } catch (err) {
        return err.message
    }
}

module.exports = getCurrentUserService
