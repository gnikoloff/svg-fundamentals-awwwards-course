const SimplexNoise = require('simplex-noise')

module.exports = (req, res) => {
  const pointsCount = req.query.count ? parseInt(req.query.count, 10) : 50
  const simplex = new SimplexNoise()
  const todayDate = new Date()
  const arr = new Array(pointsCount).fill(null).map((_, i) => {
    const date = new Date()
    date.setDate(todayDate.getDate() - pointsCount + i + 1)
    return {
      date,
      value: (simplex.noise2D(i * 0.08, i * 0.01) + 1) * 500
    }
  })
  res.status(200).json(arr)
}
