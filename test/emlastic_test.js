(function ($) {
	module('jQuery#emlastic', {
		setup: function () {
			this.elems = $('#qunit-fixture').children();
		}
	});

	test('is chainable', function () {
		expect(1);
		strictEqual(this.elems.emlastic(), this.elems, 'should be chainable');
	});

	test('is emlastic', function () {
		expect(1);
		strictEqual(this.elems.emlastic().text(), 'emlastic0emlastic1emlastic2', 'should be emlastic');
	});

}(jQuery));
