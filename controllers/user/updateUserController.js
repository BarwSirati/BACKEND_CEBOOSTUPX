const { updateUserService } = require('../../services/user')
const updateUserController = async (req, res) => {
    try {
        const query = await updateUserService(req.body, req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = updateUserController
