const { delQuestionService } = require('../../services/question')

const delQuestionController = async (req, res) => {
    try {
        const query = await delQuestionService(req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}

module.exports = delQuestionController
