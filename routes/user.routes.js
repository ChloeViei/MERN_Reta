const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');


// auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logOut);

// user
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

// inventory
router.patch('/inventory/:id', userController.inventoryUser);
router.patch('/edit-inventory/:id', userController.editInventoryUser);
router.patch('/delete-inventory/:id', userController.deleteInventoryUser);

module.exports = router;