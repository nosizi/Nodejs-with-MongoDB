import mongoose from 'mongoose'
import PostSchema from '../schema/post'

module.exports = mongoose.model('Post', PostSchema)