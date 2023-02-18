const authMiddleware = require("../middlewares/authMiddleware");
const Exam = require("../models/examModel");
const User = require("../models/userModel");
const router = require("express").Router();

// ADD REPORT

router.post("/add-report", authMiddleware, async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.send({
      message: "Nəticə əlavə edildi",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// GET ALL ATTEMPTS

router.post("/get-all-attempts", authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find();
    res.send({
      message: "Nəticə gətrildi",
      data: reports,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});
