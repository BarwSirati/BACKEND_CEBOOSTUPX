const { addSubmitService } = require('../../services/submit')
const { checkUserTokenService } = require('../../services/user')
const addSubmitController = async (req, res) => {
    try {
        const checkToken = await checkUserTokenService(req.user.id)
        if (!checkToken) return res.sendStatus(403)
        const query = await addSubmitService(req.body)
        return res.status(201).send(query)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
}

module.exports = addSubmitController
