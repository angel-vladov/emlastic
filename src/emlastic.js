/*
 *
 * Copyright (c) 2016 Angel Vladov
 * Licensed under the MIT license.
 */
(function ($) {
	$.fn.emlastic = function (options) {
		var opts = $.extend({}, $.fn.emlastic.defaults, options);

		return this.each(function () {
			var $element = $(this);
			var $container = null;
			var previousValue = 0;
			var totalEms = parseInt(opts.designSize) / parseFloat(opts.pixelsInEm);

			if (!totalEms || isNaN(totalEms)) {
				totalEms = 100; // TODO: Throw an error
			}

			switch (opts.container) {
				case 'window':
					$container = $(window);
					break;

				default:
					if (opts.container != null) {
						$container = $(opts.container);
					} else {
						$container = $element;
					}
			}

			function calculateContainerSize() {
				if (opts.containerSize != null) { // jshint ignore:line
					if ($.isNumeric(opts.containerSize)) {
						return parseInt(opts.containerSize);
					} else if ($.isFunction(opts.containerSize)) {
						return opts.containerSize($element[0], opts);
					} else {
						throw 'Container size can only be a number or function.';
					}
				}

				switch (opts.direction) {
					case 'horizontal':
						return $container.width();

					case 'vertical':
						return $container.height();

					default:
						return $container.height();
				}
			}

			function onResize() {
				var containerSize = calculateContainerSize();

				if (containerSize) {
					containerSize = parseFloat(containerSize);

					var newValue = (containerSize / totalEms * 6.25);

					if (!previousValue || newValue != previousValue) {
						// Use pixelsInEm of 100 whenever possible. Android doesn't allow em size less than 8px
						$element.css('fontSize', newValue + '%');

						previousValue = newValue;
					}
				}

				$element.removeClass('emlastic-running');
			}

			$element.addClass('emlastic-running');

			setTimeout(onResize, 0);

			$(window)
				.on('resize', onResize)
				.on('orientationchange', onResize);
		});
	};

	$.fn.emlastic.defaults = {
		pixelsInEm: 100,
		designSize: 1920,
		direction: 'horizontal',
		containerSize: null, // Setting container size will block automatic size detection
		container: null // By default this is the element where you are attaching the directive
	}
}(jQuery));
