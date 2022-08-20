const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    input: {
        type: Object,
        required: true,
    },
    output: {
        type: Object,
        required: true,
    },
    issuer: {
        type: String,
        default: '',
    },
    detail: {
        type: String,
        default: '',
    },
    detail_input: {
        type: String,
        default: '',
    },
    detail_output: {
        type: String,
        default: '',
    },
    note: {
        type: String,
        default: '',
    },
    image: {
        type: String,
    },
    rank: {
        type: Number,
        required: true,
    },
    ex_input: {
        type: Object,
        default: '',
    },
    ex_output: {
        type: Object,
        default: '',
    },
    status: {
        type: Boolean,
        default: 0,
    },
    finished: {
        type: Number,
        default: 0,
    },
})

const QuestionModel = mongoose.model('question', schema)
module.exports = QuestionModel
