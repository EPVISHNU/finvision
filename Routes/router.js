const express = require('express');

const adminController = require('../Controllers/adminController')

const userController = require('../Controllers/userController')

const formController = require('../Controllers/formController')

const multerConfig = require('../Middleware/multerMiddleware')

const router = new express.Router()

// router.post('/adminregister',adminController.adminregister)

router.post('/adminlogin',adminController.adminlogin)

router.post('/register',userController.register)

router.post('/login',userController.login)

router.get('/details',formController.getDetails)

router.post('/apply',multerConfig.single('resume'), formController.apply);

module.exports = router