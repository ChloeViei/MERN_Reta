const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - pseudo
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the user
 *        pseudo:
 *          type: string
 *          description: The user pseudo
 *        email:
 *          type: string
 *          description: The user email
 *        password:
 *          type: string
 *          description: The user password
 *      example:
 *        id: 6175cfd2eb4cf366cc76a13a
 *        pseudo: test
 *        email: test@gmail.com
 *        password: test123
 */


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

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users managing API
 */

/**
 * @swagger
 * paths:
 *  /api/user/:
 *      get:
 *          summary: Returns the list of all the users
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: The list of the users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * paths:
 *  /api/user/{id}:
 *      get:
 *          summary: Returns the user by id
 *          tags: [Users]
 *          parameters:
 *            - name: id
 *              in: path
 *              schema:
 *                  type: string
 *              required: true
 *              description: The user id
 *          responses:
 *              200:
 *                  description: The user description by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              400:
 *                  description: The user was not found
 */


/**
 * @swagger
 * paths:
 *  /api/user/register:
 *      post:
 *          summary: Create a new user
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: The user was successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              500:
 *                  description: Some server error
 */


/**
 * @swagger
 * paths:
 *  /api/user/{id}:
 *      put:
 *          summary: Update the user by the id
 *          tags: [Users]
 *          parameters:
 *            - name: id
 *              in: path
 *              schema: 
 *                  type: string
 *              required: true
 *              description: The user id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: The user was successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * paths:
 *  /api/user/{id}:
 *      deelete:
 *          summary: Remove the user by the id
 *          tags: [Users]
 *          parameters:
 *            - name: id
 *              in: path
 *              schema: 
 *                  type: string
 *              required: true
 *              description: The user id
 *          responses:
 *              200:
 *                  description: The user was deleted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */
