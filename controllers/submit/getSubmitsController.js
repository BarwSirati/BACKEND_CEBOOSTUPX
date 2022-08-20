const { getSubmitsService } = require('../../services/submit')
const getSubmitsController = async (req, res) => {
    try {
        const query = await getSubmitsService(req.params.questionId)
        return res.status(200).send(query)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
}

module.exports = getSubmitsController
