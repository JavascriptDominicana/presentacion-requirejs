define(function define_dom_pedro() {
	return function dom_pedro(tag, html, color) {
		var element = document.createElement( tag );

		if (typeof html !== 'undefined') {
			element.innerHTML = html;
		}

		if (typeof color !== 'undefined') {
			element.style.color = color;
		}

		return element;
	}
});