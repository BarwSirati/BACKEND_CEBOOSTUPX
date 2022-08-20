const { getQuestionService } = require('../../services/question')

const getQuestionController = async (req, res) => {
    try {
        const query = await getQuestionService(req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}

module.exports = getQuestionController
