const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  } else {
    if (req.query.field) {
      console.log(req.query.field);
      const { imageURL, title } = product;
      res.send({ imageURL, title });
    } else {
      res.send(product);
    }
  }
});

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const projections = await productService.getProjectionsByFields(req.query);
  const result = await productService.queryProducts(filter, options, projections);
  res.send(result);
});

const deleteProduct = catchAsync(async (req, res) => {
  await productService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

const updateProduct = catchAsync(async (req, res) => {
  console.log(req.params.productId);
  const product = await productService.updateProductById(req.params.productId, req.body);
  res.send(product);
});

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  getProducts,
  updateProduct,
};
