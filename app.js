const express = require('express')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const corsOptions = require('./configs/corsOptions')
const { logger } = require('./middleware/logEvents')
const verifyJWT = require('./middleware/verifyJWT')
const compression = require('compression')
const {
    authRoute,
    questionRoute,
    submitRoute,
    userRoute,
    defaultRoute,
} = require('./routes')

//header
app.use(helmet.contentSecurityPolicy())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.xssFilter())

//middleware
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: false }))
app.use(compression())

//router
app.use('/', defaultRoute)
app.use('/auth', authRoute)
app.use('/question', verifyJWT, questionRoute)
app.use('/users', verifyJWT, userRoute)
app.use('/submit', verifyJWT, submitRoute)

// Error Handling
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 404
    err.status = err.status || 'Not Found!'

    res.status(err.statusCode).send({
        status: err.status,
        message: err.cusMessage || 'Unknown Error',
        code: err.code || 0,
    })
    next()
})

module.exports = app
