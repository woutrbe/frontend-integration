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
                    console.log(results.value[i]);
                    browser.elementIdText(results.value[i].ELEMENT, function(err, res) {
                         console.log(res);

                         // browser.isVisible(res, function(err, value) {
                         //    console.log(err);
                         //    console.log(value);
                         // })
                    });

                    // browser.isVisible(results.value[i], function(err, value) {
                    //     console.log(err);
                    //     console.log(value);
                    // })
                }
            })
            // .click('.facebook', function(err) {
            //     assert(err === null);

            //     browser.pause(5000, function() {
            //         // #social-follow-popup has to be vissible
            //         browser.isVisible('#social-follow-popup', function(err, value) {
            //             assert(value === false);
            //         })
            //     })
            // })
            // // trigger click on .article-share-bar .facebook
            // .click('.article-share-bar .facebook', function(err) {
            //     assert(err === null);

            //     browser.pause(5000, function() {
            //         // #social-follow-popup has to be vissible
            //         browser.isVisible('#social-follow-popup', function(err, value) {
            //             assert(value === false);
            //         })
            //     })
            // })
            .call(done)
    });
});