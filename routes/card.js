var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('card', {
		title: 'OrderApp - Card',
		page: {
			heading: 'Card'
		},
		user: {
			name: 'Michele',
			surname: 'Johnson',
			profilePicture: 'gravatar.jpg'
		},
		itemsInCard: [
			{
				name: 'Buffalo Wings',
				price: "20.0",
				descript: 'Lorem ipsum dolor sit amet!',
				img: './dist/img/menu-2-2x.jpg',
				buttonText: 'Repeat last order'
			},
			{
				name: 'Schnitzel Salad',
				price: "20.0",
				descript: 'Crunchy, munchy schnitzel and crispy caesar salad, a dynamite duo!',
				img: './dist/img/lastOrder.png',
				buttonText: 'Repeat last order'
			}
		]
	});
});

module.exports = router;
