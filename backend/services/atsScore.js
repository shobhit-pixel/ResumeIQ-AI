const calculateATS = (skillsFound) => {
  const totalSkills = 12;

  return Math.round(
    (skillsFound.length / totalSkills) * 100
  );
};

module.exports = {
  calculateATS
};