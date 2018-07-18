var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('favorites', {
		title: 'OrderApp - Favorites',
		page: {
			heading: 'Favorites'
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
		favorites: [
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
		]
	});
});

module.exports = router;
