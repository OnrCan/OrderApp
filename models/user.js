const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
	name: String,
	mail: String,
	password: String,
	avatar: String,
	lastOrder: String,
	creditCardNumber: String,
	address: String,
	favorites: [],
	orders: []
})

module.exports = mongoose.model('user', userSchema)