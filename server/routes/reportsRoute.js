const authMiddleware = require('../middlewares/authMiddleware';)

const router = require('express').Router();

// ADD ATTEMPT

router.post('/add-report',authMiddleware,  async (req, res)=> {
    try {
        const newReport = new Report(req.body);
        await newReport.save();
        res.send({
            message: 'Nəticə əlavə edildi',
            success: true,
        })
    } catch (error) {
       res.status(500).send({
        message: error.message,
        data: error,
        success: false
       })
    }
})