const express = require('express')
const router = express.Router()
const { addSubmitValidation } = require('../validations/submit')

const {
    getSubmitController,
    getSubmitsController,
    addSubmitController,
} = require('../controllers/submit')

router.get('/:questionId', getSubmitsController)
router.get('/:questionId/:userId', getSubmitController)
router.post('/', addSubmitValidation, addSubmitController)

module.exports = router
