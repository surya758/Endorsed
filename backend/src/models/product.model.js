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
      type: String,
      required: true,
    },
    rating: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
    },
    storage: {
      type: Number,
      required: true,
    },
    resolution: {
      type: String,
      required: true,
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
