const express = require('express');
const { validateForm }= require('../middlewares/validateForm');
const userController = require('../controller/userController');
const { validateToken } = require('../middlewares/validateToken');
const router = express.Router();

router.post('/', validateForm, userController.registerUser);
router.put('/edit', validateToken, userController.editUserData);

module.exports = router;
