// ==UserScript==
// @name         Sh$t Reddit Translation
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove "?tl=lang" ou "&tl=lang" of url on Reddit
// @author       firexdf
// @match        *://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanURL() {
        let url = new URL(window.location.href);

        if (url.searchParams.has('tl')) {
            url.searchParams.delete('tl');
            window.location.replace(url.href);
        }
    }

    cleanURL();
})();
