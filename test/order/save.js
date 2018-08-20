const assert = require('assert')
const orderModel = require('../../models/order')

describe('Saves a record to orders collection', () => {

	let order

	it('Saves a record', (done) => {
		order = new orderModel({
			user_id: '5b7ab5e3300979d8224570a9',
			food_id: '5b7ab5e3300979d8224570a9',
			status: 'Preparing',
			address: 'Ankara, Turkey'
		})

		order.save().then(() => {
			assert(order.isNew === false)
			done()
		})
	}) // it('Saves a record', (done) => {
	
})