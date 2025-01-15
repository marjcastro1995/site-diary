const express = require('express');
const { getDiaries, createDiary, getDiaryById } = require('../controllers/diaryController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.get('/', getDiaries);
router.post('/', upload.single('image'), createDiary);
router.get('/:id', getDiaryById);

module.exports = router;
