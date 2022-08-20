const { getScoreBoardService } = require('../../services/user')

const getScoreBoardController = async (req, res) => {
    try {
        const query = await getScoreBoardService()
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getScoreBoardController
