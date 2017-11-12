'use strict'
const router = require('express').Router() // carga el Router de express
const UserController = require('../controllers/user') // carga el controlador de

router
.get('/prueba', UserController.prueba)
.post('/register', UserController.saveUser)
.post('/login', UserController.loginUser)
.get('/users', UserController.listUsers)
module.exports = router

//  'use strict'

// let express = require('express');
// let UserController = require('../controllers/user');
// let api = express.Router();

// api.get('/prueba', UserController.prueba);

// api.post('/register', UserController.saveUser);

// module.exports = api;*/
