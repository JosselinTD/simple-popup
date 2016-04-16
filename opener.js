function setModal(clickableCssSelector, toOpenInClickableCssSelector, toCloseInClickableCssSelector) {
	console.log('Hey !');
	var clickable = document.querySelectorAll(clickableCssSelector),
		i = 0,
		clickableLength = clickable.length;

	for (i = 0; i < clickableLength; i++) {
		console.log('Ho !');
		var clickableElement = clickable[i];

		clickableElement
			.onclick = function(event) {
				console.log('Youhou !');
				clickableElement
					.querySelector(toOpenInClickableCssSelector)
					.classList
					.add('simple-popup-opened');
				document
					.querySelector('body')
					.classList
					.add('opacified');
			}

		clickableElement
			.querySelector(toCloseInClickableCssSelector)
			.onclick = function(event) {
				event.stopPropagation();
				clickableElement
					.querySelector(toOpenInClickableCssSelector)
					.classList
					.remove('simple-popup-opened');
				document
					.querySelector('body')
					.classList
					.remove('opacified');
			}
	}
}