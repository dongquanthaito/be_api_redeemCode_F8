const express = require('express')
const { loginBO } = require('../controllers/loginBO.controller')
const Router = express.Router()

Router.route('/').post(loginBO)

module.exports = Router