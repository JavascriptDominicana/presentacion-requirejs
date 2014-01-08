define(function module() {
	return {
		load: function load(path) {
			require([ path ], function( module ) {
				if (typeof module === 'function')
					module();
			});
		}
	}
});