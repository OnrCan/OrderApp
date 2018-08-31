const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
	user_id: String,
	food_id: Schema.Types.ObjectId,
	status: String,
	address: String
})

module.exports = mongoose.model('order', orderSchema)