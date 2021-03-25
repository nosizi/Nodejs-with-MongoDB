const mongoose = require('mongoose')
const ArticleSchema = require('../schema/article')

module.exports = mongoose.model('Article', ArticleSchema)