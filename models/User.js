const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        default: 0,
    },
    group: {
        type: Number,
        require: true,
        min: 0,
        max: 5,
    },
    finished: {
        type: Number,
        default: 0,
    },
    role: {
        type: String,
        default: 'user',
    },
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
