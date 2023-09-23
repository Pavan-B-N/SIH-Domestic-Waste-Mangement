const express = require('express');
const { check } = require('express-validator');
const authController = require("../controllers/authcontroller");
const router = express.Router();
router.post('/register', authController.register);

router.post('/login',authController.login);

module.exports = router;