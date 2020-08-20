const express = require('express')
const app = express()

const PostRoute = require('./routes/post.js')

app.use('/posts', PostRoute)

app.get('/', (req, res) => {
  res.end('Hello World.')
})

app.listen(3000)