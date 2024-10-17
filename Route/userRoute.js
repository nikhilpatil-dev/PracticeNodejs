const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { validateCreateUser, validateUpdateUser } = require('../Request/userrequest');

router.get('/users', userController.getAllUsers);
router.post('/ADDusers',validateCreateUser,userController.createUser);
router.put('/Update/:id',validateUpdateUser,userController.updateUser)
router.get('/getbyid/:id',userController.getUserById)
router.delete('/delete/:id',userController.deleteUser)



module.exports = router;