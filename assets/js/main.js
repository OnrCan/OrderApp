// Initilazes
const d = document;
let sidenavWrapper, sidenavOverlay;
let href

(function () {
	initializeWaves();
})()

function initializeSidenav() {
	const sidenavSlideOut = d.querySelector('#sidenav-out');
	sidenavWrapper = d.querySelector('#sidenav-wrapper');
	sidenavOverlay = d.querySelector('#sidenav-overlay');
	sidenavSlideOut.addEventListener('click', slideOutSideNav);
	sidenavOverlay.addEventListener('touchend', closeSideNav);
}

function slideOutSideNav(event) {
	event.preventDefault()
	sidenavWrapper.classList.add('active');
	sidenavOverlay.style.display = 'block';
	setTimeout(() => {
		sidenavOverlay.classList.add('active');
	}, 1)
}

function closeSideNav(event) {
	event.preventDefault()
	sidenavWrapper.classList.remove('active');
	sidenavOverlay.classList.remove('active');
	setTimeout(() => {
		sidenavOverlay.style.display = 'none';
	}, 300);
}

function initializeCollapsible(d) {
	const collapsibleItem = d.querySelectorAll('.collapsible-item');

	collapsibleItem.forEach((item) => {
		let collapsibleBody = item.children[3];

		item.addEventListener('click', function () {
			collapsibleBody.classList.toggle('active');
		});
	});
}

function toggleFavorite(e, toggleButton) {
	e.stopPropagation();
	let favoriteIcon = toggleButton.children[0];

	toggleButton.classList.toggle('active');

	toggleButton.classList.contains('active')
		? favoriteIcon.classList.replace('ion-ios-heart-empty', 'ion-ios-heart')
		: favoriteIcon.classList.replace('ion-ios-heart', 'ion-ios-heart-empty')
}

function initializeFavoriteButtons() {
	const favoriteMenuItems = d.querySelectorAll('.favorite-menu')
	let favoriteButtons = d.querySelectorAll('.food__toggle-favorite')

	// for (const listItem of favoriteMenuItems) {

	// 	favoriteButtons.push(
	// 		Array.from(listItem.children)
	// 				.filter(child => child.classList.contains('food__toggle-favorite'))
	// 	);

	// }

	favoriteButtons.forEach(_ => {
		_.addEventListener('click', (e) => {
			toggleFavorite(e, _)
		})
	})

}

function initializeIngredientOptions() {
	let optionButtons = d.querySelectorAll('.btn-ingredient-option')

	optionButtons.forEach((btn) => {
		let optionCountElement = btn.parentElement.children[1]

		btn.addEventListener('click', () => {
			btn.classList.contains('btn-decrease-ingredient')
				? optionCountElement.innerHTML = Number(optionCountElement.innerHTML) - 1
				: optionCountElement.innerHTML = Number(optionCountElement.innerHTML) + 1
		})
	})
}

function initializeWaves() {
	let waves = d.querySelectorAll('.waves')

	//? Burada a elementinin attribute'larini alip redirect islemini setTimeout ile yapabilirim.

	waves.forEach((_) => {
		_.addEventListener('click', (event) => {
			wavesAnimationSetter(event, _)
		})
	})
}

function wavesAnimationSetter(event, el) {

	event.preventDefault();

	el.getAttribute('href')
		? href = el.getAttribute('href')
		: href = null


	el.classList.toggle('active');

	setTimeout(() => {
		el.classList.toggle('active');

		if (href) { window.location.href = href }

	}, 700)

}