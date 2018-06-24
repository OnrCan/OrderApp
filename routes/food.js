var express = require('express');
var router = express.Router();

/* GET food page. */
router.get('/', function(req, res, next) {
  res.render('food', {
    page: {
      heading: "Buffalo Wings"
    },
    food: {
      id: 1,
      deliveryTime: "30 Minute",
      calorie: "150cal",
      totalRatingCount: 30
    },
    restaurant: {
      name: "L'Univerre - Bordeux"
    }
  });
});

module.exports = router;
