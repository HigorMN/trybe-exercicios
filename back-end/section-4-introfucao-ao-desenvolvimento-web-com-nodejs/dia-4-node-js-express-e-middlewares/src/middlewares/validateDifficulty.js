const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description
}

module.exports = {
  validateDifficulty,
}