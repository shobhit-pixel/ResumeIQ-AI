const { extractText } = require("../services/pdfService");
const { extractSkills } = require("../services/skillExtractor");
const { calculateATS } = require("../services/atsScore");

exports.uploadResume = async (req, res) => {
  try {

    const text = await extractText(req.file.path);

    const {
      foundSkills,
      missingSkills
    } = extractSkills(text);

    const atsScore = calculateATS(foundSkills);

    const suggestions = [];

missingSkills.forEach((skill) => {
  suggestions.push(
    `Add ${skill} to improve your profile`
  );
});

if (atsScore >= 80) {
  suggestions.push(
    "Strong resume. Focus on internships and certifications"
  );
}

const jobMatch = {
  frontend: 0,
  react: 0,
  fullstack: 0,
  backend: 0,
};

if (foundSkills.includes("html")) jobMatch.frontend += 15;
if (foundSkills.includes("css")) jobMatch.frontend += 15;
if (foundSkills.includes("javascript")) jobMatch.frontend += 20;
if (foundSkills.includes("react")) jobMatch.frontend += 30;
if (foundSkills.includes("bootstrap")) jobMatch.frontend += 15;

if (foundSkills.includes("react")) jobMatch.react += 40;
if (foundSkills.includes("javascript")) jobMatch.react += 25;
if (foundSkills.includes("html")) jobMatch.react += 15;
if (foundSkills.includes("css")) jobMatch.react += 15;

if (foundSkills.includes("node.js")) jobMatch.fullstack += 25;
if (foundSkills.includes("react")) jobMatch.fullstack += 25;
if (foundSkills.includes("mongodb")) jobMatch.fullstack += 25;
if (foundSkills.includes("express")) jobMatch.fullstack += 25;

if (foundSkills.includes("node.js")) jobMatch.backend += 30;
if (foundSkills.includes("express")) jobMatch.backend += 30;
if (foundSkills.includes("mongodb")) jobMatch.backend += 20;
if (foundSkills.includes("mysql")) jobMatch.backend += 20;

        res.json({
        success: true,
        atsScore,
        skills: foundSkills,
        missingSkills,
        suggestions,
        jobMatch,
        text
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};