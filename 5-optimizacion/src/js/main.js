define(
	[
		'core/module',
		'jQuery'
	],
	function main(module, $) {
		$('#wrapper > h1').html( "It's Alive! Alive!! ");

		$('#wrapper').fadeIn();

		$('#wrapper .nav-tabs a').on('shown.bs.tab', function() {
			var pagina = $( this ).attr( 'href' ).replace( '#', '' );

			module.load( 'paginas/' + pagina );
		});

		module.load( 'paginas/pagina-1' );
	}
)