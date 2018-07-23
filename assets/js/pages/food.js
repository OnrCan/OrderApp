
const backLinkButton = d.querySelector('#back-link')

backLinkButton.addEventListener('click', goPrevPage);

function goPrevPage() {
	window.history.back(-1);
}

(function() {

	initializeFavoriteButtons();
	initializeIngredientOptions();

})()