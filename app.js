const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())

const ArticleApi = require('./api/article')
app.use('/articles', ArticleApi)

app.get('/', (req, res) => {
  res.end('Hello World.')
})

const mongoose = require('mongoose')
const CONNECT_URI = 'mongodb://localhost:27017/blog'
mongoose.connect(CONNECT_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB 连接错误'))
db.once('open', () => {
  console.log('连接数据库成功！')
  app.listen(3000)
})
