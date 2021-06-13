const express = require('express');
const commentController = require('../../controllers/comment.controller');
const router = express.Router();

// router.get('/:productId/comments', commentController.getCommentsByProduct);

router.post('/', commentController.createComment);
router.get('/:commentId', commentController.getComment);

module.exports = router;
