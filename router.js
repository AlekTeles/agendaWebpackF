const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')



//H
route.get('/', homeController.index)
// RL
route.get('/login/index', loginController.index)


module.exports = route;