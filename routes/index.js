var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'OrderApp',
    page: {
      heading: 'Anasayfa'
    },
    category: {
      name: 'Ana Yemekler',
      shortSlogan: 'Damak tadınıza göre...',
      foods: [
        {
          id: 1,
          name: "Gurme Tabağı",
          category: "Sebze",
          price: parseFloat(19.00).toFixed(2)
        }
      ]
    },
    user: {
      name: 'Michele',
      surname: 'Johnson',
      profilePicture: 'gravatar.jpg'
    }
  });
});

module.exports = router;
