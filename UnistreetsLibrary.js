// ==UserScript==
// @exclude       *
// @author        SomeDude
// ==UserLibrary==
// @name          UnistreetsLibrary
// @description   A simple library for frequently used functions with Unistreets
// @license       MIT
// @version       0.1
// ==/UserScript==
// ==/UserLibrary==

function UnistreetsFetch(link, cookies, body) {
    fetch(link, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": cookies
        },
        "body": body,
        "method": "POST",
        "mode": "cors"
    });
}