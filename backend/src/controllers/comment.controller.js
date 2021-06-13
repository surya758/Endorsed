const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { Comment } = require('../models');

const createComment = catchAsync(async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(httpStatus.CREATED).send(comment);
});

const getComment = catchAsync(async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'comment not found');
  }
  res.send(comment);
});

module.exports = {
  createComment,
  getComment,
};
