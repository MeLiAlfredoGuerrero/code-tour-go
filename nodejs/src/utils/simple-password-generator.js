!(function(){

	_ = require('lodash-node');

	var defaults = {
		length : 8
	};

	exports.generate = function(userOptions)
	{
		var options = _.assign(defaults, userOptions);

		var number = Math.random()

		var string = number.toString(36)

		var password = string.slice(-defaults['length']);

		return password;
	}

})();