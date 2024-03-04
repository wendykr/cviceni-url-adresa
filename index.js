var url = {
    protocol: 'http://',
    domainName: 'seznam',
    tld: 'cz',
};
console.log(url);
var urlOption = {
    protocol: 'https://',
    subdomain: 'video',
    domainName: 'google',
    tld: 'co.uk',
    port: 80,
    path: 'videoplay',
    query: '?',
    parameters: 'docid=-724692761283107823&hl=en',
    fragment: '#00h02m30s',
};
console.log(urlOption);
var formatUrl = function (url) {
    var formattedUrl = url.protocol || '';
    (url.subdomain) && (formattedUrl += "".concat(url.subdomain, "."));
    formattedUrl += url.domainName + ".".concat(url.tld);
    (url.port) && (formattedUrl += ":".concat(url.port));
    (url.path) && (formattedUrl += "/".concat(url.path));
    (url.query) && (formattedUrl += "".concat(url.query));
    (url.parameters) && (formattedUrl += "&".concat(url.parameters));
    (url.fragment) && (formattedUrl += "".concat(url.fragment));
    return formattedUrl;
};
console.log(formatUrl(url));
console.log(formatUrl(urlOption));
// BONUS
var parseURL = function (input) {
    var isValidUrl = function (urlString) {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    };
    if (isValidUrl(input)) {
        var url_1 = new URL(input);
        var searchQuery = url_1.search[0];
        var searchParameters = url_1.search.substring(2);
        var searchPort = url_1.host.split(':');
        var domainSplit = searchPort[0].split('.');
        // const domainNameLength = searchPort[0].split('.').length;
        var urlObject = {
            protocol: url_1.protocol + '//',
            subdomain: domainSplit[0],
            domainName: searchPort[0],
            tld: 'co.uk',
            port: Number(searchPort[1]),
            path: url_1.pathname.substring(1),
            query: searchQuery,
            parameters: searchParameters,
            fragment: url_1.hash,
        };
        return urlObject;
    }
    else {
        return null;
    }
};
console.log(parseURL('https://video.google.co.uk:80/videoplay?&docid=-724692761283107823&hl=en#00h02m30s'));
