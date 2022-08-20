const { getQuestionGraderService } = require('../../services/question')

const getQuestionGraderController = async (req, res) => {
    try {
        const query = await getQuestionGraderService(req.params.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}

module.exports = getQuestionGraderController
