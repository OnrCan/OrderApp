const express = require('express');
const router = express.Router();
const connectDB = require('../library/connectDB')
const menuModel = require('../models/food')

/* GET food page. */
router.get('/:restAPI', function (req, res, next) {

	getIndex(req.params.restAPI).then((menuObj) => {

		res.render('food', {
			page: {
				heading: menuObj.name
			},
			menu: {
				id: menuObj._id,
				name: menuObj.name,
				img: menuObj.img,
				deliveryTime: menuObj.estimatedServiceTimeinMin,
				calorie: menuObj.calorie,
				totalRatingCount: menuObj.totalRate,
				price: menuObj.price
			},
			ingredients: menuObj.ingredients,
			restaurant: {
				name: menuObj.restaurant_name
			}
		});
	})
	
});


function getIndex(param) {
	let menu = {}
	connectDB.connect()
	
	return new Promise((resolve, reject) => {
		menuModel.findOne({ restAPI:  param}).then(doc => {
			menu = doc
			return menu
		}).then(resolve)
	})

}


module.exports = router;
