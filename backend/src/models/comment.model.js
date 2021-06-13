const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    body: {
      required: true,
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
  },
  {
    timestamp: true,
  }
);
commentSchema.plugin(toJSON);

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name',
  }).populate({
    path: 'product',
    select: 'title',
  });
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
