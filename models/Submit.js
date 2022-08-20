const mongoose = require('mongoose')
const SubmitSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        questionId: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        result: {
            type: String,
            required: true,
        },
        sourceCode: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        createAt: {
            type: Date,
        },
    },
    {
        timestamps: { currentTime: Date.now },
    }
)

const SubmitModel = mongoose.model('Submit', SubmitSchema)
module.exports = SubmitModel
