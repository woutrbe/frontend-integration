'use strict';

var assert = require('assert');

describe('Ads', function() {
	this.timeout(60000);

	it('display ads after page load', function(done) {
		// .adslot .adslot_feed
		browser
            .url('http://www.lifehack.org/articles/communication/truly-believe-arent-like-others-heres-next.html')
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
            })
            .call(done);
	});
});