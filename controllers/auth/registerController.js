const { addUserService, checkIsAdmin } = require('../../services/user')

const registerController = async (req, res) => {
    try {
        const checkAdmin = await checkIsAdmin(req.user)
        if (!checkAdmin) return res.sendStatus(403)
        const query = await addUserService(req.body)
        if (query.statusCode === 409)
            return res.status(query.statusCode).send({ error: query.err })
        return res.status(201).send(query)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = registerController
