const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products/create', productsController.create);

router.post('/products/create', productsController.add);

router.get('/products/edit/:id', productsController.edit);

module.exports = router;