const assert = require('assert')
const foodModel = require('../../models/food')

describe('Saves a record to foods collection', () => {

	it('Saves a record', (done) => {
		let food = new foodModel({
			name: 'Buffalo Wings',
			description: 'Eşsiz mozarella peyniri ve marul salatası ile hamburgeri eşsiz kılan bir menü!',
			category: 'Snack',
			avatar: 'dist/img/menu-1.jpg',
			featuredImg: '',
			price: 15.0,
			estimatedServiceTimeinMin: '30',
			calorie: 150,
			restaurant_name: "L'Univerre - Bordeux",
			ingredients: [
				'Barbecue Sauce',
				'Chips',
				'Mustard Sauce'
			],
			star: 4,
			totalRate: 30
		})

		food.save().then(() => {
			assert(food.isNew === false)
			done()
		})
	}) // it('Saves a record', (done) => {
	
})