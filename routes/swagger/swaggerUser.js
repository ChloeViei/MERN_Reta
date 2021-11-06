
// USER MODEL

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
 *        pseudo: test
 *        email: test@gmail.com
 *        password: test123
 */



/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users managing API
 */


// LIST USERS

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


// INFO USER

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


// CREATE USER

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


// UPDATE USER

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
 *                  description: The user was successfully updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */


// DELETE USER

/**
 * @swagger
 * paths:
 *  /api/user/{id}:
 *      delete:
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



/**
 * @swagger
 * tags:
 *  name: Inventory
 *  description: The inventory managing API
 */

// CREATE ELEMENT INVENTORY

/**
 * @swagger
 * paths:
 *  /api/user/inventory/{id}:
 *      patch:
 *          summary: Create element in inventory of the user by the id
 *          tags: [Inventory]
 *          parameters:
 *            - in: path
 *              name: id
 *              schema: 
 *                  type: string
 *              required: true
 *              description: The user id
 *            - in: body
 *              name: inventory
 *              description: The inventory create.
 *              schema:
 *                  type: object
 *              required:
 *                  - userName
 *              properties:
 *                  itemId:
 *                      type: string
 *                  quantity:
 *                      type: integer
 *              example:
 *                  itemId: 0000000001311
 *                  quantity: 10
 *          responses:
 *              200:
 *                  description: The inventory was create
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */
