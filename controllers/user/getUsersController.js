const { getUsersService, checkIsAdmin } = require('../../services/user')

const getUsersController = async (req, res) => {
    try {
        const checkAdmin = await checkIsAdmin(req.user)
        if (!checkAdmin) return res.sendStatus(403)
        const query = await getUsersService()
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getUsersController
