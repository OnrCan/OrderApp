'use strict';

var d = document;

var sidenavSlideOut = d.querySelector('#sidenav-out');
var sidenavWrapper = d.querySelector('#sidenav-wrapper');
var sidenavOverlay = d.querySelector('#sidenav-overlay');

sidenavSlideOut.addEventListener('click', slideOutSideNav);
sidenavOverlay.addEventListener('touchend', closeSideNav);

function slideOutSideNav(event) {
	event.preventDefault();
	sidenavWrapper.classList.add('active');
	sidenavOverlay.style.display = 'block';
	setTimeout(function () {
		sidenavOverlay.classList.add('active');
	}, 1);
}

function closeSideNav(event) {
	event.preventDefault();
	sidenavWrapper.classList.remove('active');
	sidenavOverlay.classList.remove('active');
	setTimeout(function () {
		sidenavOverlay.style.display = 'none';
	}, 300);
}

function initializeCollapsible(d) {
	var collapsibleItem = d.querySelectorAll('.collapsible-item');

	collapsibleItem.forEach(function (item) {
		var collapsibleBody = item.children[3];

		item.addEventListener('click', function () {
			collapsibleBody.classList.toggle('active');
		});
	});
}

function toggleFavorite(e, toggleButton) {
	e.stopPropagation();
	var favoriteIcon = toggleButton.children[0];

	toggleButton.classList.toggle('active');

	toggleButton.classList.contains('active') ? favoriteIcon.classList.replace('ion-ios-heart-empty', 'ion-ios-heart') : favoriteIcon.classList.replace('ion-ios-heart', 'ion-ios-heart-empty');
}

function initializeFavoriteButtons() {
	var favoriteMenuItems = d.querySelectorAll('.favorite-menu');
	var favoriteButtons = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = favoriteMenuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var listItem = _step.value;


			favoriteButtons.push(Array.from(listItem.children).filter(function (child) {
				return child.classList.contains('food__toggle-favorite');
			}));
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	console.log(favoriteButtons);
	favoriteButtons.forEach(function (_) {
		_[0].addEventListener('click', function (e) {
			toggleFavorite(e, _[0]);
		});
	});
}