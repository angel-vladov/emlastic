/*
 *
 *
 *
 * Copyright (c) 2016 Angel Vladov
 * Licensed under the MIT license.
 */
(function ($) {
	$.fn.emlastic = function () {
		return this.each(function (i) {
			// Do something to each selected element.
			$(this).html('emlastic' + i);
		});
	};
}(jQuery));
