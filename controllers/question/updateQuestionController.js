const { updateQuestionService } = require('../../services/question')
const { checkIsAdmin } = require('../../services/user')

const updateQuestionController = async (req, res) => {
    try {
        const checkAdmin = await checkIsAdmin(req.user)
        if (!checkAdmin) return res.sendStatus(403)
        const query = await updateQuestionService(req.params.id, req.body)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}

module.exports = updateQuestionController
