const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    // required: true,
  },
  rating: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment.model',
  },
  specification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'specification.model',
  },
});

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

productSchema.statics.isTitleTaken = async function (title, excludeProductId) {
  const product = await this.findOne({ title, _id: { $ne: excludeProductId } });
  return !!product;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
