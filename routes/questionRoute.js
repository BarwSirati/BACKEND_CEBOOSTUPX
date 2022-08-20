const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
const {
    addQuestionController,
    updateQuestionController,
    delQuestionController,
    getQuestionsController,
    getQuestionController,
    getQuestionGraderController,
} = require('../controllers/question')

const { addQuestionValidation } = require('../validations/question')

router.get('/', getQuestionsController)
router.get('/:id', getQuestionController)
router.get('/grader/:id', getQuestionGraderController)
router.post('/', addQuestionValidation, addQuestionController)
router.delete('/:id', delQuestionController)
router.patch('/:id', updateQuestionController)

module.exports = router
