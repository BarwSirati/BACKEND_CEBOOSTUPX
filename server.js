const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const dotenv = require('dotenv')
const db = require('./db/conn')
require('./configs/passport')
db.connect()
dotenv.config()

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`server running on ${port}`)
})
