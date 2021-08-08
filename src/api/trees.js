module.exports = (req, res) => {
  const pointsCount = 50
  const arr = new Array(pointsCount).fill(null).map((_, i) => {
    const tree = { diameter: Math.random() * 5, height: Math.random() * 8 }
    return tree
  })
  res.status(200).json(arr)
}
