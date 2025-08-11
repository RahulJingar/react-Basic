const express = require('express');
const router = express.Router();    
const userController = require('../Controller/user');


router.post('/create', userController.createUser);

router.patch('/reset', userController.reset);
router.post('/login', userController.login);
router.get('/getUser/:id', userController.getUserById);
router.delete('/userdelete/:id', userController.deleteUser);
router.put('/updateUser/:id',userController.updateUser)

module.exports = router