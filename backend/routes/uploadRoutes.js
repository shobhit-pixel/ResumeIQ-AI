const express = require("express");
const multer = require("multer");

const {
  uploadResume,
} = require("../controllers/resumeController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/",
  upload.single("resume"),
  (req, res, next) => {
    console.log("POST /api/upload hit");
    next();
  },
  uploadResume
);

module.exports = router;