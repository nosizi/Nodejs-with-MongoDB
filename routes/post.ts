const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.end('There is Post page.')
})

router.post('/', (req, res) => {
  res.send({
    title: 'Hello, my man.'
  })
})

module.exports = router