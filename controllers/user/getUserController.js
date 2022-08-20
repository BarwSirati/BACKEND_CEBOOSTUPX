const { getUserService, checkUserTokenService } = require('../../services/user')
const getUserController = async (req, res) => {
    try {
        if (req.user.id != req.params.id) return res.sendStatus(403)
        const checkToken = await checkUserTokenService(req.user.id)
        if (!checkToken) return res.sendStatus(403)
        const query = await getUserService(req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getUserController
