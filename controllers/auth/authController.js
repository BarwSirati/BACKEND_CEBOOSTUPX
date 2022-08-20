const {
    findUserByUsernameService,
    getUserService,
} = require('../../services/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const handleLoginController = async (req, res) => {
    try {
        const { username, password } = req.body
        const foundUser = await findUserByUsernameService(username)
        if (!foundUser) return res.status(401).send({ msg: 'Unauthorized ' })
        const match = await bcrypt.compare(password, foundUser.password)
        if (match) {
            const queryUser = await getUserService(foundUser._id)
            const accessToken = jwt.sign(queryUser, process.env.TOKEN_SECRET, {
                expiresIn: '7d',
            })
            return res.status(200).send({ accessToken: accessToken })
        }
        return res.sendStatus(403)
    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
}
module.exports = handleLoginController
