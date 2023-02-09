const router = require('express').Router();
const Exam = require('../models/examModel');
const authMiddleware = require('../middlewares/authMiddleware');

// ADD EXAM

router.post('/add', authMiddleware, async (req, res) => {
    try {
        // EXAM ALREADY EXISTS
        const examExist = await Exam.findOne({ name: req.body.name });
        if (examExist) {
            return res.status(200).send({ message: "İmtahan artıq mövcuddur", success: false })
        }
        req.body.questions = [];
        const newExam = new Exam(req.body);
        await newExam.save();
        res.send({
            message: 'Imtahan əlavə edildi',
            success: true,
        });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            data: error,
            success: false,
        });
    }
})

module.exports = router;