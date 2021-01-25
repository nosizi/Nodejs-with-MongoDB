const express = require('express')
const app = express()
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://myTester:myTester2021@http://106.53.88.138:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', console.error.bind(console, 'MongoDB 连接错误'))

const cors = require('cors')

const PostRoute = require('./routes/post.js')

app.use(cors())
app.use('/posts', PostRoute)

app.get('/', (req, res) => {
  res.end('Hello World.')
})

app.listen(3000)
