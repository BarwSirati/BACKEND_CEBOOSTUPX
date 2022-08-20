const express = require('express')
const router = express.Router()
const {
    delUserController,
    getRankingController,
    getScoreBoardController,
    getUserController,
    getUsersController,
    updateUserController,
    getCurrentUserController,
} = require('../controllers/user')
const { updateValidation } = require('../validations/user')

router.get('/', getUsersController)
router.get('/:id', getUserController)
router.get('/current/info', getCurrentUserController)
router.get('/score/ranking', getRankingController)
router.get('/score/board', getScoreBoardController)
router.patch('/:id',updateValidation, updateUserController)
router.delete('/:id', delUserController)

module.exports = router
