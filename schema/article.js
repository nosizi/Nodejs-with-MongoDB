import mongoose from 'mongoose'

const { Schema } = mongoose
module.exports = new Schema({
	title: String,
	author: String,
	release: Date,
	content: String,
	modifiedTime: Date,
	tags: Array,
	cover: String,
	isPublish: Boolean,
	comments: Number,
	commentsList: [
		{
			release: Date,
			device: String,
			userName: String,
			avatar: String,
			comment: String,
			commentsList: [
				{
					release: Date,
					device: String,
					userName: String,
					avatar: String,
					comment: String,
				}
			]
		}
	],
	views: Number,
})
