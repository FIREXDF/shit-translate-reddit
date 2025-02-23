// ==UserScript==
// @name         Sh!t Reddit Translation
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove "?tl=lang" ou "&tl=lang" of url on Reddit
// @author       firexdf
// @match        *://*.reddit.com/*
// @grant        none
// @updateURL    https://github.com/FIREXDF/shit-translate-reddit/raw/refs/heads/main/Sh$t%20Reddit%20Translation-1.0.user.js
// @downloadURL  https://github.com/FIREXDF/shit-translate-reddit/raw/refs/heads/main/Sh$t%20Reddit%20Translation-1.0.user.js
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
