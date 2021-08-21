const express = require('express');
const validateForm = require('../middlewares/validateForm');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/user', validateForm, userController.registerUser);

module.exports = router;
