const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    views: {
      type: Number,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    description: {
      type: String,
      default: 'Description...',
    },
    releaseDate: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    imageURL: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
    },
    storage: {
      type: Number,
    },
    resolution: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    colors: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.plugin(toJSON);
productSchema.plugin(paginate);
// productSchema.set('toJSON', { virtuals: true });
// productSchema.set('toObject', { virtuals: true });

//Virtual Populate
productSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'product',
  localField: '_id',
});

productSchema.statics.isTitleTaken = async function (title, excludeProductId) {
  const product = await this.findOne({ title, _id: { $ne: excludeProductId } });
  return !!product;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
