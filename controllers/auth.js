const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports.login = (req, res) => {
    res.status(200).json({
        login: 'login from controller LOGIN'
    })
}

module.exports.mock = (req, res) => {
    console.log('MOCK!!!')
    res.status(200).json({
        result: 'mock test OK'
    })
}

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate){
        res.status(403).json({
            message: 'Email already exist'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const new_user = new User({
         email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
            })
            try {
                await user.save().then(() => console.log('User created'))
                res.status(201).json(user)
            } catch (e) {
                res.status(500)
            }
    }
}