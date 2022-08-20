const { getCurrentUserService } = require('../../services/user')
const getCurrentUserController = async (req, res) => {
    try {
        const query = await getCurrentUserService(req.user)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getCurrentUserController
