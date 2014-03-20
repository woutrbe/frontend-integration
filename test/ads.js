'use strict';

var assert = require('assert');

describe('Google ads', function () {
    this.timeout(60000);

    it('show ads after load', function(done) {
        browser
            .url('http://www.lifehack.org')
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
            })
            .elements('.adslot, .adslot_feed', function(err, results) {
                console.log(results);
                for(var i = 0; i < results.value.length; i++) {
                	browser.pause(5000, function() {
                		browser.elementIdAttribute(results.value[i].ELEMENT, 'data-dfp', function(err, result) {
                			console.log(err);
                			console.log(result.value);
                		})
                	})
                }
            }).call(done);
    });
});