'use strict';

var assert = require('assert');

describe('Facebook sharing', function () {
    this.timeout(60000);

    it('open overlay when sharing', function(done) {
        browser
            .url('http://www.lifehack.org/articles/communication/truly-believe-arent-like-others-heres-next.html')
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
            })
            // Select all .facebook elements
            .elements('.facebook', function(err, results) {
                // Loop through all the results
                for(var i = 0; i < results.value.length; i++) {
                    var element = results.value[i].ELEMENT;

                    // Trigger a click on each element
                    browser.elementIdClick(element, function(err) {
                        // If it throws an error the element is not visible on the page
                        if(err) { 
                            console.log('[LOG] Facebook share button not clickable, skipping to next one');
                        } else {
                            // Pause the browser to give enough time for the popup to show
                            browser.pause(5000, function() {
                                // Check if the popup is visible or note
                                browser.isVisible('#social-follow-popup', function(err, value) {
                                    if(value === true) done();
                                })
                            })
                        }
                    });
                }
            }).call(done);
    });
});