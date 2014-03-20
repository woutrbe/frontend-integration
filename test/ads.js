var assert = require('assert'),
	async = require('async');


describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(5));
     		assert.equal(-1, [1,2,3].indexOf(0));
		})
	})
})

describe('Ads', function() {
	describe('Google Ads', function() {
		// Allow some time to load
		this.timeout(15000);

		it('should display ads after page load', function(done) {
			var browser = this.browser;

			browser.get('http://www.lifehack.org/', function() {
				console.log('test');

				browser.title(function(err, title) {
					title.should.include('lifehack');
				})
			});
		})
	})
})