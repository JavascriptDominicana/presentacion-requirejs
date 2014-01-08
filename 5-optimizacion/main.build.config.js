({
	appDir				: './src',
	dir					: './build',
	baseUrl				: 'js',
	mainConfigFile		: './src/js/config.js',
	paths				: {
		jQuery: '../libs/jquery/jquery.min'
	},
	optimizeCss			: 'standard',
	modules: [
		{
			name: 'main'
		}
	]
})
/*({
	baseUrl				: '.',
	name				: 'main',
	mainConfigFile		: './config.js',
	out					: './main.build.js',
	paths				: {
		jQuery: '../libs/jquery/jquery.min'
	}
})*/