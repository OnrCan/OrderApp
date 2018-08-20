const mongoose = require('mongoose')

// ES6 Promises
mongoose.Promise = global.Promise

// Connect the DB before tests run
mongoose.connect('mongodb://127.0.0.1:27017/orderapp', { useNewUrlParser: true })

exports.connect = () => {
	mongoose.connection.once('open', () => {
		console.log('Connection has been established!')
	}).on('error', (err) => {
		console.error(`Connection error: ${err}`)
	})
}