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
	sidenavOverlay.classList.add('active');
	sidenavOverlay.style.display = 'block';
}

function closeSideNav(event) {
	event.preventDefault();
	sidenavWrapper.classList.remove('active');
	sidenavOverlay.classList.remove('active');
	setTimeout(function () {
		sidenavOverlay.style.display = 'none';
	}, 300);
}