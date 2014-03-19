'use strict';

var assert = require('assert');

describe('Facebook sharing', function () {
	this.timeout(30000);

    it('open overlay when sharing', function(done) {
        browser
            .url('http://www.lifehack.org/articles/communication/truly-believe-arent-like-others-heres-next.html')
            .title(function(err, res) {
            	console.log('Title was: ' + res.value);
            })
            .click('.default-sharebar .article-share-bar .facebook', function() {
            	browser.waitFor('#social-follow-popup', 5000, function(err) {
	            		browser.isVisible('#social-follow-popup', function(err, value) {
	            				console.log('value');
	            			})
	            	})
            })
            .pause(30000, function() {
            	console.log('pause');
            })
            .call(done)

    });

});