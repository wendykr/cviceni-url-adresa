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
