const express = require('express')
const { protect, restrictedTo } = require('../controller/authinticationCont')
const { feedbackPost, feedbackDetails } = require('../controller/feedbackCont')
const feedbackRoute = express.Router()

feedbackRoute.post('/dataPost',feedbackPost)
feedbackRoute.get('/dataGet',protect,restrictedTo('admin'),feedbackDetails)

module.exports = feedbackRoute