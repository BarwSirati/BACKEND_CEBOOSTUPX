const express = require('express')
const router = express.Router()
const { authController, registerController } = require('../controllers/auth')
const { loginValidation, registerValidation } = require('../validations/user')
const verifyJWT = require('../middleware/verifyJWT')

router.post('/user/login', loginValidation, authController)
router.post('/user/register', registerValidation, verifyJWT, registerController)
module.exports = router
