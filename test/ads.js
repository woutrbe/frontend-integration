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
                    var element = results.value[i].ELEMENT;
                    console.log(element);

                    console.log('---------------');

                	browser.pause(5000, function() {
                        console.log(element);

                        console.log('---------------');

                		browser.elementIdAttribute(element, 'data-dfp', function(err, result) {
                			console.log(err);
                			console.log(result.value);
                		})
                	})
                }
            }).end();
    });
});