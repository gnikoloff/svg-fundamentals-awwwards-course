module.exports = (req, res) => {
  const getRandCount = (max = 30) => 1 + Math.round(Math.random() * max)
  let categories = [
    { color: '#e74c3c', name: 'Comedy', count: getRandCount() },
    { color: '#d35400', name: 'Action', count: getRandCount() },
    { color: '#f39c12', name: 'Romance', count: getRandCount() },
    { color: '#2980b9', name: 'Drama', count: getRandCount() },
    { color: '#16a085', name: 'SciFi', count: getRandCount() },
  ]
  const totalMoviesCount = categories.reduce((acc, { count }) => acc + count, 0)
  categories = categories.map(category => ({
    ...category,
    share: category.count / totalMoviesCount
  }))
  res.status(200).json(categories)
}
