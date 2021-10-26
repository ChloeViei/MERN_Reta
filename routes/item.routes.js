const router = require('express').Router();
const itemController = require('../controllers/item.controller');


// item
router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;