const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} productBody
 * @returns {Promise<User>}
 */
const createProduct = async (productBody) => {
  if (await Product.isTitleTaken(productBody.title)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product already exists');
  }
  const product = await Product.create(productBody);
  return product;
};

const queryProducts = async (filter, options, projections) => {
  // const projections = {};
  const products = await Product.paginate(filter, options, projections);
  return products;
};

const getProductById = async (id) => {
  return Product.findById(id);
};

/**
 * Delete product by id
 * @param {ObjectId} productId
 * @returns {Promise<prodcut>}
 */
const deleteProductById = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found in database');
  }
  await product.remove();
  return product;
};

const updateProductById = async (productId, updateBody) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  if (updateBody.title && (await Product.isTitleTaken(updateBody.title, productId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product already exists');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

module.exports = {
  createProduct,
  queryProducts,
  getProductById,
  deleteProductById,
  updateProductById,
};
