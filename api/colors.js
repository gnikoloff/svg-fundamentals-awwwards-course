module.exports = (req, res) => {
  const minAmount = 1000
  const maxAmount = 10000 - minAmount
  const colors = [
    {
      label: 'Carrot',
      color: '#e67e22'
    },
    {
      label: 'Green Sea',
      color: '#16a085'
    },
    {
      label: 'Orange',
      color: '#f39c12'
    },
    {
      label: 'Pomegranate',
      color: '#c0392b'
    },
    {
      label: 'Belize Hole',
      color: '#2980b9'
    },
    {
      label: 'Wisteria',
      color: '#8e44ad'
    }
  ]
  const data = colors.map(({ color, label }) => ({
    color,
    label,
    value: minAmount + Math.round(Math.random() * maxAmount)
  }))
  res.status(200).json(data)
}