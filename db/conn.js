const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
exports.connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        process.exit(1)
    }
}
