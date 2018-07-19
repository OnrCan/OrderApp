const d = document

const sidenavSlideOut = d.querySelector('#sidenav-out')
const sidenavWrapper = d.querySelector('#sidenav-wrapper')
const sidenavOverlay = d.querySelector('#sidenav-overlay')


sidenavSlideOut.addEventListener('click', slideOutSideNav)
sidenavOverlay.addEventListener('touchend', closeSideNav)


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