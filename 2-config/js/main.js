define(
	[
		'dom-pedro',
		'math/math',
		'test/test',
		'lodash'
	],
	function main(domPedro, math, test, _) {

		var el = domPedro('h1', math.suma( 5, math.constantes.pi ), '#F90' );

		document.body.appendChild( el );

		console.log('TEST: ', test);

		_.forEach( test.test, function(letra) {
			var el = domPedro( 'h3', letra, '#999' );

			document.body.appendChild( el );
		});
	}
)