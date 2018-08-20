const mongoose = require('mongoose')
const Schema = mongoose.Schema

let foodSchema = new Schema({
	name: String,
	description: String,
	category: String,
	price: Number,
	avatar: String,
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