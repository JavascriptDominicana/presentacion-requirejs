define(
	[
		'./constantes',
		'./suma',
		'./resta',
		'./mult',
		'./div'
	], 
	function define_math(constantes, suma, resta, mult, div) {
		return {
			constantes	: constantes,
			suma		: suma,
			resta		: resta,
			mult		: mult,
			div			: div
		};
	}
);