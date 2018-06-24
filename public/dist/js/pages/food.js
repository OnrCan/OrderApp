'use strict';

var d = document;

var backLinkButton = d.querySelector('#back-link');

backLinkButton.addEventListener('click', goPrevPage);

function goPrevPage() {
	window.history.back(-1);
}