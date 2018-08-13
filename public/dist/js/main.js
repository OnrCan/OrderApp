'use strict';

// Initilazes
var d = document;
var sidenavWrapper = void 0,
    sidenavOverlay = void 0;

function initializeSidenav() {
	var sidenavSlideOut = d.querySelector('#sidenav-out');
	sidenavWrapper = d.querySelector('#sidenav-wrapper');
	sidenavOverlay = d.querySelector('#sidenav-overlay');
	sidenavSlideOut.addEventListener('click', slideOutSideNav);
	sidenavOverlay.addEventListener('touchend', closeSideNav);
}

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
	var favoriteButtons = d.querySelectorAll('.food__toggle-favorite');

	// for (const listItem of favoriteMenuItems) {

	// 	favoriteButtons.push(
	// 		Array.from(listItem.children)
	// 				.filter(child => child.classList.contains('food__toggle-favorite'))
	// 	);

	// }

	favoriteButtons.forEach(function (_) {
		_.addEventListener('click', function (e) {
			toggleFavorite(e, _);
		});
	});
}

function initializeIngredientOptions() {
	var optionButtons = d.querySelectorAll('.btn-ingredient-option');

	optionButtons.forEach(function (btn) {
		var optionCountElement = btn.parentElement.children[1];

		btn.addEventListener('click', function () {
			btn.classList.contains('btn-decrease-ingredient') ? optionCountElement.innerHTML = Number(optionCountElement.innerHTML) - 1 : optionCountElement.innerHTML = Number(optionCountElement.innerHTML) + 1;
		});
	});
}

function initializeWaves() {
	var waves = d.querySelectorAll('.waves');

	waves.forEach(function (_) {
		_.addEventListener('click', function (event) {
			// event.preventDefault();
			_.classList.toggle('active');

			setTimeout(function () {
				_.classList.toggle('active');
			}, 900);
		});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	initializeWaves();
});