const express = require('express');
const router = express.Router();


const userController = require('../Controller/user');

router.post('/create',userController.userCreate);

module.exports = router;










