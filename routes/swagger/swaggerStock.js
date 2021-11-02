
// STOCK MODEL

/**
 * @swagger
 *components:
 *  schemas:
 *    Stock:
 *      type: object
 *      required:
 *        - userId
 *        - inventory
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the user
 *        userId:
 *          type: string
 *          description: The user id who get this stock
 *        inventory:
 *          type: object
 *          description: The inventory of the user
 *          properties:
 *              productId:
 *                  type: String
 *              quantity:
 *                  type: integer
 *              timestamps:
 *                  type: integer
 *          required:
 *            - productId
 *            - quantity
 */



/**
 * @swagger
 * tags:
 *  name: Stocks
 *  description: The stocks managing API
 */


// LIST STOCKS

/**
 * @swagger
 * paths:
 *  /api/stock/:
 *      get:
 *          summary: Returns the list of all the stocks
 *          tags: [Stocks]
 *          responses:
 *              200:
 *                  description: The list of the stocks
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Stock'
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