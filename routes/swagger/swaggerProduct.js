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




// REMOVE ELEMENT PRODUCT

/**
 * @swagger
 * paths:
 *  /api/product/{element}:
 *      put:
 *          summary: Remove element in the product
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

