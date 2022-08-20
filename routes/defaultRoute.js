const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    res.status(200).send({ msg: 'THIS BACKEND FOR CEBOOSTUPX | KMITL CE60' })
})

module.exports = router
