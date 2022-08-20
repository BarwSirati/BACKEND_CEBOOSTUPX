const { QuestionModel, SubmitModel } = require('../../models')

const question = async () => {
    const query = await QuestionModel.find({ status: true })
        .select('_id number title unit rank')
        .sort({ _id: 'asc' })
        .exec()
    return query
}

const submit = async (userId) => {
    const query = await SubmitModel.find({ userId: userId })
        .sort({
            questionId: 'asc',
        })
        .exec()
    return query
}
const compare = (a, b) => {
    if (a.rank < b.rank) {
        return -1
    }
    if (a.rank > b.rank) {
        return 1
    }
    return 0
}

const getQuestionsService = async (userId) => {
    try {
        const [questionQuery, submitQuery] = await Promise.all([
            question(),
            submit(userId),
        ])
        let item = []
        let count = 0
        if (submitQuery.length > 0) {
            for (let i = 0; i < questionQuery.length; i++) {
                const question = questionQuery[i]
                if (count < submitQuery.length) {
                    if (String(submitQuery[count].questionId ) == String(question._id)) {
                        let items = {
                            _id: question._id,
                            title: question.title,
                            rank: question.rank,
                            unit: question.unit,
                            status: submitQuery[count].status,
                            result: submitQuery[count].result,
                        }
                        item.push(items)
                        count++
                    } else {
                        let items = {
                            _id: question._id,
                            title: question.title,
                            rank: question.rank,
                            unit: question.unit,
                            status: false,
                            result: '',
                        }
                        item.push(items)
                    }
                } else {
                    let items = {
                        _id: question._id,
                        title: question.title,
                        rank: question.rank,
                        unit: question.unit,
                        status: false,
                        result: '',
                    }
                    item.push(items)
                }
            }
        } else {
            if (questionQuery.length > 0) {
                for (let i = 0; i < questionQuery.length; i++) {
                    const question = questionQuery[i]
                    let items = {
                        _id: question._id,
                        title: question.title,
                        rank: question.rank,
                        unit: question.unit,
                        status: false,
                        result: '',
                    }
                    item.push(items)
                }
            }
        }
        item.sort(compare)
        return item
    } catch (err) {
        return err.message
    }
}
module.exports = getQuestionsService
