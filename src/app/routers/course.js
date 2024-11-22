const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');

router.get('/:slug', courseController.show);
router.post('/', courseController.create)
router.get('/', courseController.index);
router.delete('/:id', courseController.delete)
router.put('/:id', courseController.update)

module.exports = router;
