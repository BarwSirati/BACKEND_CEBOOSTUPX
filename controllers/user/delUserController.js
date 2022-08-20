const { delUserService, checkIsAdmin } = require('../../services/user')
const delUserController = async (req, res) => {
    try {
        const checkAdmin = await checkIsAdmin(req.user)
        if (!checkAdmin) return res.sendStatus(403)
        const query = await delUserService(req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = delUserController
