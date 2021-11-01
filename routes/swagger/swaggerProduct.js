// PRODUCT MODEL

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - name          
 *      properties:
 *          id:
 *              type: string
 *              description: The auto-generated id of the user
 *          name:
 *              type: string
 *              description: The product name
 *          default_quantity:
 *              type: number
 *              description: The quantity of the product
 *          picture:
 *              type: string
 *              description: The product picture
 *          type:
 *              type: string
 *              enum: Type
 *              description: The product type (MEAT, DRINK ...)
 *          unit:
 *              type: string
 *              enum: Unit
 *              description: The product unit (WEIGHT, VOLUME, NUMBER)
 *      example:
 *        name: Test
 */



/**
 * @swagger
 * tags:
 *  name: Products
 *  description: The products managing API
 */


// LIST PRODUCTS

/**
 * @swagger
 * paths:
 *  /api/product/:
 *      get:
 *          summary: Returns the list of all the products
 *          tags: [Products]
 *          responses:
 *              200:
 *                  description: The list of the products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */


// INFO PRODUCT

/**
 * @swagger
 * paths:
 *  /api/product/{id}:
 *      get:
 *          summary: Returns the product by id
 *          tags: [Products]
 *          parameters:
 *            - name: id
 *              in: path
 *              schema:
 *                  type: string
 *              required: true
 *              description: The product id
 *          responses:
 *              200:
 *                  description: The product description by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *              400:
 *                  description: The product was not found
 */


// CREATE PRODUCT

/**
 * @swagger
 * paths:
 *  /api/product/:
 *      post:
 *          summary: Create a new product
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              200:
 *                  description: The product was successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Some server error
 */



// REMOVE ELEMENT IN PRODUCT

/**
 * @swagger
 * paths:
 *  /api/product/{id}:
 *      put:
 *          summary: Remove element in product by id
 *          tags: [Products]
 *          parameters:
 *            - name: element
 *              in: path
 *              schema:
 *                  type: string
 *              required: true
 *              description: The name of element to remove in product
 *          responses:
 *              200:
 *                  description: The product was successfully updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */