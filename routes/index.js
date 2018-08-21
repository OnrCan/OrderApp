const express = require('express');
const router = express.Router();
const connectDB = require('../library/connectDB')
const foodModel = require('../models/food')

let menus = [],
	featuredMenuDoc = {},
	categoryMenus = []

/* GET home page. */
router.get('/', function (req, res, next) {

	getIndex().then(() => {
		res.render('index', {
			title: 'OrderApp',
			page: {
				heading: 'Anasayfa'
			},
			featuredMenu: {
				name: featuredMenuDoc.name,
				restAPI: featuredMenuDoc.restAPI,
				descript: featuredMenuDoc.description,
				img: featuredMenuDoc.featuredImg,
				buttonText: 'Menüyü İncele'
			},
			category: {
				name: 'Ana Yemekler',
				shortSlogan: 'Damak tadınıza göre...',
				itemShowed: 10,
				foods: categoryMenus
			},
			user: {
				name: 'Michele',
				surname: 'Johnson',
				profilePicture: 'gravatar.jpg'
			}
		});
	})

}); // router.get('/', function(req, res, next) {

function getIndex(res) {
	categoryMenus = []

	return new Promise((resolve, reject) => {
		
		connectDB.connect()
	
		foodModel.find({ }).then(documents => {
			featuredMenuDoc = documents.filter(menu => menu.featured === true)[0]
			
			for (const menu of (documents.filter(doc => doc.featured === false))) {
				categoryMenus.push({
					id: menu._id.toString(),
					name: menu.name,
					restAPI: menu.restAPI,
					category: menu.category,
					price: parseFloat(menu.price).toFixed(2),
					img: menu.img
				})
			}
			resolve()
		})
	})
}

module.exports = router;
