define(['jQuery'], function define_pagina_2($) {
	var states = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger'];

	$('#pagina-2 .add').click(function() {
		var original = $('#pagina-2 .alert:first');
		var alertEl	= original.clone();

		for(var i in states) {
			alertEl.removeClass( states[ i ] );
		}

		var index = Math.round( Math.random() * (states.length - 1) );
		
		alertEl.addClass( states[ index ] ).hide().fadeIn();

		alertEl.insertBefore( original );
	});

	return function pagina_2() {
		$('#wrapper').hide().fadeIn().fadeOut().fadeIn();
	}
});