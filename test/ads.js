'use strict';

var assert = require('assert');

describe('Ads', function () {
    this.timeout(60000);

    it('shows google ads after page load', function(done) {
        var ads_failed = [];

        browser
            .url('http://www.lifehack.org')
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
            })
            // Select all ad elements
            .elements('.adslot, .adslot_feed', function(err, results) {
                // If no results, throw an error
                if(results.value.length == 0) throw 'There are no ads on this page.';

                // Loop over all elements
                for(var i = 0; i < results.value.length; i++) {
                    var element = results.value[i].ELEMENT;

                    // Give it 5 sec to load
                    browser.implicitWait(5000, function() {
                        // Check if the element contains a data atribute called data-dfp
                        browser.elementIdAttribute(element, 'data-dfp', function(err, result) {
                            if(result.value === null) ads_failed.push(true);
                        })
                    })
                }
            })
            .call(function() {
                browser.pause(5500, function() {
                    if(ads_failed.length > 0) {
                        throw 'Ads failed to load.';
                    } else {
                        done();
                    }
                })
            });
    });
});