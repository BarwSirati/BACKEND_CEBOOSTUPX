const getUsersService = require('./getUsersService')
const getUserService = require('./getUserService')
const updateUserService = require('./updateUserService')
const addUserService = require('./addUserService')
const delUserService = require('./delUserService')
const getRankingService = require('./getRankingService')
const getScoreBoardService = require('./getScoreBoardService')
const checkIsAdmin = require('./checkIsAdmin')
const getCurrentUserService = require('./getCurrentUserService')
const checkUserTokenService = require('./checkUserTokenService')
const findUserByUsernameService = require('./findUserByUsernameService')
const updateScoreService = require("./updateScoreService")
module.exports = {
    addUserService,
    getUsersService,
    getUserService,
    updateUserService,
    delUserService,
    getRankingService,
    getScoreBoardService,
    checkIsAdmin,
    getCurrentUserService,
    checkUserTokenService,
    findUserByUsernameService,
    updateScoreService
}
