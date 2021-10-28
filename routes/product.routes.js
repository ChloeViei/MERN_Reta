const router = require('express').Router();
const productController = require('../controllers/product.controller');


// product CRUD
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// modification OpenFoodFact
router.put('/:element', productController.deleteElementInProduct);

module.exports = router;