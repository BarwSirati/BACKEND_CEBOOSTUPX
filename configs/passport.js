const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const { UserModel } = require('../models')
const dotenv = require('dotenv')
dotenv.config()

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.TOKEN_SECRET

passport.use(
    new JwtStrategy(opts, async (jwt_payload, callback) => {
        const user = await UserModel.findById(jwt_payload.id).select(
            '-password'
        )
        if (!user) return callback(null, false)
        return callback(null, user)
    })
)
