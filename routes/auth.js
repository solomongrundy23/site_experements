const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
router.get('/1', controller.mock)
router.post('/login', controller.login)
router.post('/register', controller.register)
module.exports = router