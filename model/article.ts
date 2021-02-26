import mongoose from 'mongoose'
import ArticleSchema from '../schema/article'

module.exports = mongoose.model('Article', ArticleSchema)