const { getSubmitService } = require('../../services/submit')
const { checkUserTokenService } = require('../../services/user')
const getSubmitController = async (req, res) => {
    try {
        if (req.params.userId != req.user.id) return res.sendStatus(403)
        const checkToken = await checkUserTokenService(req.user.id)
        if (!checkToken) return res.sendStatus(403)
        const query = await getSubmitService(
            req.params.questionId,
            req.params.userId
        )
        return res.status(200).send(query)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
}

module.exports = getSubmitController
