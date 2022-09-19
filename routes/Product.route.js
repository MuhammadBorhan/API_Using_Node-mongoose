const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)

module.exports = router;