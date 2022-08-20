const { addQuestionService } = require('../../services/question')
const { checkIsAdmin } = require('../../services/user')
const addQuestionController = async (req, res) => {
    try {
        const checkAdmin = await checkIsAdmin(req.user)
        if (!checkAdmin) return res.sendStatus(403)
        const query = await addQuestionService(req.body)
        return res.status(201).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = addQuestionController
