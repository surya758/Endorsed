const express = require('express');
const auth = require('../../middlewares/auth');
const productController = require('../../controllers/product.controller');
const authController = require('../../controllers/auth.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageProducts'), productController.createProduct)
  .get(auth('getProducts'), productController.getProducts);

router
  .route('/:productId')
  .get(auth('getProducts'), productController.getProduct)
  .patch(productController.updateProduct)
  .delete(auth('manageProducts'), productController.deleteProduct);

module.exports = router;
