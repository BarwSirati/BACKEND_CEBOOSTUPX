const { getRankingService } = require('../../services/user')

const getRankingController = async (req, res) => {
    try {
        const query = await getRankingService()
        return res.status(200).send(query)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = getRankingController
