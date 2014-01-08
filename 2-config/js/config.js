var require = {
	baseUrl		: 'js/helpers',
	waitSeconds	: 0,
	paths		: {
		'test'		: '../../libs/test',
		'lodash'	: '../../libs/lodash/lodash.compat.min'
	},
	shim		: {
		'lodash'	: {
			exports		: '_',

		}
	}
}