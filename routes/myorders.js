var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('myorders', {
		title: 'OrderApp - My Orders',
		page: {
			heading: 'My Orders'
		},
		user: {
			name: 'Michele',
			surname: 'Johnson',
			profilePicture: 'gravatar.jpg'
		},
		featuredMenu: {
			name: 'Schnitzel Salad',
			descript: 'Crunchy, munchy schnitzel and crispy caesar salad, a dynamite duo!',
			img: './dist/img/lastOrder.png',
			buttonText: 'Repeat last order'
		},
		lastOrders: [
			{
				name: 'Gurme Tabağı',
				img: './dist/img/menu-1.jpg',
				price: '19.00',
				status: 0
			},
			{
				name: 'Buffalo Wings',
				img: './dist/img/menu-2-2x.jpg',
				price: '19.00',
				status: 1
			},
			{
				name: 'Pancake',
				img: './dist/img/menu-3-2x.jpg',
				price: '19.00',
				status: 1
			},
			{
				name: 'Gurme Tabağı',
				img: './dist/img/menu-1.jpg',
				price: '19.00',
				status: 1
			},
			{
				name: 'Buffalo Wings',
				img: './dist/img/menu-2-2x.jpg',
				price: '19.00',
				status: 1
			},
			{
				name: 'Pancake',
				img: './dist/img/menu-3-2x.jpg',
				price: '19.00',
				status: 1
			}
			
		],
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
});

module.exports = router;
