function setModal(clickableCssSelector, toOpenInClickableCssSelector, toCloseInClickableCssSelector) {
	var clickable = document.querySelectorAll(clickableCssSelector),
		toOpen = document.querySelectorAll(toOpenInClickableCssSelector),
		closeButton = document.querySelectorAll(toCloseInClickableCssSelector),
		i = 0,
		clickableLength = clickable.length;

	for (i = 0; i < clickableLength; i++) {
		var clickableElement = clickable[i];
		var toOpenElement = toOpen[i];
		var closeButtonElement = closeButton[i];

		doIt(clickableElement, toOpenElement, closeButtonElement);
	}
}

function doIt(clickableElement, toOpenElement, closeButtonElement) {
	clickableElement
		.onclick = function(event) {
			toOpenElement
				.classList
				.add('simple-popup-opened');
			document
				.querySelector('body')
				.classList
				.add('opacified');
		}

	closeButtonElement
		.onclick = function(event) {
			event.stopPropagation();
			toOpenElement
				.classList
				.remove('simple-popup-opened');
			document
				.querySelector('body')
				.classList
				.remove('opacified');
		}
}