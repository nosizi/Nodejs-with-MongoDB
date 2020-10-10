const express = require('express')
const app = express()

const cors = require('cors')

const PostRoute = require('./routes/post.js')

app.use(cors())
app.use('/posts', PostRoute)

app.get('/', (req, res) => {
  console.log(req)
  debugger
  res.end('Hello World.')
})

app.listen(3000)