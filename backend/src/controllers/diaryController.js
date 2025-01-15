const DiaryEntry = require('../models/diaryEntry');

exports.getDiaries = async (req, res) => {
    try {
        const diaries = await DiaryEntry.findAll();
        res.json(diaries);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve diaries', error: error.message });
    }
};

exports.createDiary = async (req, res) => {
    try {
        const { date, description, weather } = req.body;
        const imageUrl = req.file ? req.file.path : null;

        const newDiary = await DiaryEntry.create({ date, description, weather, imageUrl });
        res.status(201).json(newDiary);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create diary', error: error.message });
    }
};

exports.getDiaryById = async (req, res) => {
    try {
        const diary = await DiaryEntry.findByPk(req.params.id);
        if (!diary) return res.status(404).json({ message: 'Diary not found' });

        res.json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve diary', error: error.message });
    }
};
