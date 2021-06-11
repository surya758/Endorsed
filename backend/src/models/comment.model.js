const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    Product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  {
    timestamp: true,
  }
);
commentSchema.plugin(toJSON);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
