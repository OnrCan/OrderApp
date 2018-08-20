const assert = require('assert')
const restaurantModel = require('../../models/restaurant')

describe('Saves a record to restaurants collection', () => {

	it('Saves a record', (done) => {
		let restaurant = new restaurantModel({
			name: "L'Univerre - Bordeux",
			avatar: 'dist/img/goutte.png'
		})

		restaurant.save().then(() => {
			assert(restaurant.isNew === false)
			done()
		})
	}) // it('Saves a record', (done) => {
	
})