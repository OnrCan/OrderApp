const d = document

const sidenavSlideOut = d.querySelector('#sidenav-out')
const sidenavWrapper = d.querySelector('#sidenav-wrapper')
const sidenavOverlay = d.querySelector('#sidenav-overlay')


sidenavSlideOut.addEventListener('click', slideOutSideNav)
sidenavOverlay.addEventListener('touchend', closeSideNav)


function slideOutSideNav(event) {
	event.preventDefault()
	sidenavWrapper.classList.add('active');
	sidenavOverlay.classList.add('active');
	sidenavOverlay.style.display = 'block';
}

function closeSideNav(event) {
	event.preventDefault()
	sidenavWrapper.classList.remove('active');
	sidenavOverlay.classList.remove('active');
	setTimeout(() => {
		sidenavOverlay.style.display = 'none';
	}, 300);
}