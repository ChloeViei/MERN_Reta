const router = require('express').Router();
const stockController = require('../controllers/stock.controller');


// product CRUD
router.get('/', stockController.getAllStocks);
router.get('/:id', stockController.stockInfo);
router.post('/', stockController.createStock);
router.put('/:id', stockController.updateStock);
router.delete('/:id', stockController.deleteStock);


module.exports = router;