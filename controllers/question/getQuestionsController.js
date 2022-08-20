const { getQuestionsService } = require('../../services/question')

const getQuestionsController = async (req, res) => {
    try {
        const query = await getQuestionsService(req.user.id)
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getQuestionsController
