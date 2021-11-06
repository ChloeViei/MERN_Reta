const router = require('express').Router();
const productController = require('../controllers/product.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();


// product CRUD
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.put('/:id', productController.removeElementInProduct);
router.delete('/:id', productController.deleteProduct);

// upload picture
router.post('/upload', upload.single('file') , uploadController.uploadPicture);

module.exports = router;