const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.end('There is Post page.')
})

module.exports = router