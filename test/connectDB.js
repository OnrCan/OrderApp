const mongoose = require('mongoose')

// ES6 Promises
mongoose.Promise = global.Promise

// Connect the DB before tests run
before((done) => {
	mongoose.connect('mongodb://127.0.0.1:27017/orderapp', { useNewUrlParser: true })

	mongoose.connection.once('open', () => {
		console.log('Connection has been established!')
		mongoose.connection.collections.restaurants.drop()
		mongoose.connection.collections.users.drop()
		mongoose.connection.collections.foods.drop()
		mongoose.connection.collections.orders.drop()
		done()
	}).on('error', (err) => {
		console.error(`Connection error: ${err}`)
	})


})