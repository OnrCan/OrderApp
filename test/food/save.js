const assert = require('assert')
const foodModel = require('../../models/food')

describe('Saves a record to foods collection', () => {

	it('Saves a record', (done) => {
		let food = new foodModel({
			name: 'Hamburger',
			featured: true,
			description: 'Eşsiz mozarella peyniri ve marul salatası ile hamburgeri eşsiz kılan bir menü!',
			category: 'Snack',
			img: {},
			featuredImg: './dist/img/hamburger.png',
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

		let food1 = new foodModel({
			name: 'Buffalo Wings',
			featured: false,
			description: '',
			category: 'Snack',
			img: {
				'2x': 'dist/img/menu-2-2x.jpg'
			},
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

		let food2 = new foodModel({
			name: 'Gurme Tabağı',
			featured: false,
			description: '',
			category: 'Meat',
			img: {
				'1x': 'dist/img/menu-1.jpg'
			},
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

		let food3 = new foodModel({
			name: 'Schnitzel Salad',
			featured: false,
			description: '',
			category: 'Meat',
			img: {},
			featuredImg: './dist/img/lastOrder.png',
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

		let food4 = new foodModel({
			name: 'Pancake',
			featured: false,
			description: '',
			category: 'Dessert',
			img: {
				'2x': './dist/img/menu-3-2x.jpg'
			},
			featuredImg: './dist/img/lastOrder.png',
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
		})
		food1.save().then(() => {
			assert(food1.isNew === false)
		})
		food2.save().then(() => {
			assert(food2.isNew === false)
		})
		food3.save().then(() => {
			assert(food3.isNew === false)
		})
		food4.save().then(() => {
			assert(food4.isNew === false)
			done()
		})
	}) // it('Saves a record', (done) => {

	it('Finds all documents', (done) => {
		foodModel.find({}).then((result) => {
			console.log(result)
			done()
		})
	})
	
})