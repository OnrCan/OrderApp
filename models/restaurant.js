const mongoose = require('mongoose')
const Schema = mongoose.Schema

let restaurantSchema = new Schema({
	name: String,
	avatar: String
})

module.exports = mongoose.model('restaurant', restaurantSchema)