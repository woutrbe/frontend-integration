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
            .elements('.facebook', function(err, results) {
                for(var i = 0; i < results.value.length; i++) {
                    browser.elementIdClick(results.value[i].ELEMENT, function(err) {
                        if(err) { 
                            console.log('[LOG] Facebook share button not clickable, skipping to next one');
                        } else {
                            browser.pause(5000, function() {
                                browser.isVisible('#social-follow-popup', function(err, value) {
                                    // if(value === false) throw 'Popup not shown';
                                    if(value === true) done();
                                })
                            })
                        }
                    });
                }
            }).call(done);
    });
});