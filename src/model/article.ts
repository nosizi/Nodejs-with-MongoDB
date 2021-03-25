import * as mongoose from 'mongoose'
import ArticleSchema from '../schema/article'

export default mongoose.model('Article', ArticleSchema)