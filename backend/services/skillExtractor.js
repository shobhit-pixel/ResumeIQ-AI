const allSkills = [
  "html",
  "css",
  "javascript",
  "react",
  "node.js",
  "express",
  "mongodb",
  "mysql",
  "typescript",
  "redux",
  "tailwind",
  "next.js",
  "git",
  "github",
  "bootstrap",
  "python",
  "java"
];

const extractSkills = (resumeText) => {
  const text = resumeText.toLowerCase();

  const foundSkills = allSkills.filter(skill =>
    text.includes(skill.toLowerCase())
  );

  const missingSkills = allSkills.filter(
    skill => !foundSkills.includes(skill)
  );

  return {
    foundSkills,
    missingSkills
  };
};

module.exports = {
  extractSkills
};