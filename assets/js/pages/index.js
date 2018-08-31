(function() {
	initializeSidenav();
	initializeCartFloatingButtonAnimation();
})()

function initializeCartFloatingButtonAnimation() {

	let lastScrollY = 0
	let btn = d.querySelector('.cart-floating-button')
	let isButtonActive = false

	window.addEventListener('scroll', () => {
		
		// Scroll Downward
		if(!isButtonActive && ((lastScrollY + 50) < window.scrollY)) {
			lastScrollY = window.scrollY;
			btn.classList.remove('active');
			return;
		}

		if(isButtonActive) return;

		// Scroll Upward
		if(lastScrollY > window.scrollY) {
			lastScrollY = window.scrollY;
			btn.classList.add('active');
			return;
		}

	})
	
}