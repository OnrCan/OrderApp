var express = require('express');
var router = express.Router();
var connectDB = require('../library/connectDB')
var Food = require('../models/food')
var Order = require('../models/order')
var User = require('../models/user')

let orders = [],
	userID = null,
	user = {},
	lastOrders = [],
	featuredOrderID = null,
	featuredOrder = null

/* GET home page. */
router.get('/', function (req, res, next) {

	getOrders().then(() => {
		res.render('myorders', {
			title: 'OrderApp - My Orders',
			page: {
				heading: 'My Orders'
			},
			user: {
				name: user.name,
				profilePicture: user.avatar
			},
			featuredMenu: {
				name: featuredOrder.name,
				descript: featuredOrder.description,
				img: featuredOrder.img['2x'],
				buttonText: 'Repeat last order'
			},
			lastOrders: lastOrders,
			category: {
				name: 'Favorites',
				shortSlogan: 'Most loved ones...',
				itemShowed: 2,
				foods: [
					{
						id: 1,
						name: "Gurme Tabağı",
						category: "Sebze",
						price: parseFloat(19.00).toFixed(2)
					}
				]
			}
		});

	})
});

function getOrders() {
	user = {},
		lastOrders = [],
		featuredOrderID = null,
		featuredOrder = null

	return new Promise((resolve, reject) => {
		connectDB.connect().then(() => {
			User.findOne({ "mail": "onrcan.ozkan@gmail.com" })
				.then(result => {
					user = result
					featuredOrderID = result.lastOrder

					Order.find({
						"user_id": user._id.toString()
					}).then((results) => {
						let foodIDs = results.map(result => result.food_id)
						console.log('foodIDs', foodIDs);

						Food.find({
							'_id': { $in : foodIDs}
						}).then((foods) => {
							foods.forEach(food => {
								(food._id == featuredOrderID)
									? featuredOrder = food
									: lastOrders.push({
										id: food._id.toString(),
										name: food.name,
										img: food.img["2x"],
										price: parseFloat(food.price).toFixed(2),
										status: 1
									})
							})
							resolve()
						})
						// ! resolve nereye konulacak çozemiyorum
					})
				})
		})

	})
}

module.exports = router;
