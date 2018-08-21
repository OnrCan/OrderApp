const mongoose = require('mongoose')
const Schema = mongoose.Schema

let foodSchema = new Schema({
	name: String,
	restAPI: String,
	description: String,
	featured: Boolean,
	category: String,
	price: Number,
	img: {},
	featuredImg: String,
	estimatedServiceTimeinMin: String,
	calorie: Number,
	restaurant_id: Schema.Types.ObjectId,
	restaurant_name: String,
	ingredients: [],
	star: Number,
	totalRate: Number
})

module.exports = mongoose.model('food', foodSchema)