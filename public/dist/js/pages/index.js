'use strict';

(function () {
	initializeSidenav();
	initializeCartFloatingButtonAnimation();
})();

function initializeCartFloatingButtonAnimation() {

	var lastScrollY = 0;
	var btn = d.querySelector('.cart-floating-button');
	var isButtonActive = false;

	window.addEventListener('scroll', function () {

		// Scroll Downward
		if (!isButtonActive && lastScrollY + 50 < window.scrollY) {
			lastScrollY = window.scrollY;
			btn.classList.remove('active');
			return;
		}

		if (isButtonActive) return;

		// Scroll Upward
		if (lastScrollY > window.scrollY) {
			lastScrollY = window.scrollY;
			btn.classList.add('active');
			return;
		}
	});
}