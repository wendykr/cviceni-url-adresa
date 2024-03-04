interface Url {
  protocol: string;
  subdomain?: string;
  domainName: string;
  tld: string;
  port?: number;
  path?: string;
  query?: string;
  parameters?: string;
  fragment?: string;
}

const url: Url = {
  protocol: 'http://',
  domainName: 'seznam',
  tld: 'cz',
}

console.log(url);

const urlOption: Url = {
  protocol: 'https://',
  subdomain: 'video',
  domainName: 'google',
  tld: 'co.uk',
  port: 80,
  path: 'videoplay',
  query: '?',
  parameters: 'docid=-724692761283107823&hl=en',
  fragment: '#00h02m30s',
}

console.log(urlOption);

const formatUrl = (url: Url): string => {
  let formattedUrl: string = url.protocol || '';

  (url.subdomain) && (formattedUrl += `${url.subdomain}.`);

  formattedUrl += url.domainName + `.${url.tld}`;

  (url.port) && (formattedUrl += `:${url.port}`);
  (url.path) && (formattedUrl += `/${url.path}`);
  (url.query) && (formattedUrl += `${url.query}`);
  (url.parameters) && (formattedUrl += `&${url.parameters}`);
  (url.fragment) && (formattedUrl += `${url.fragment}`);

  return formattedUrl;
}

console.log(formatUrl(url));
console.log(formatUrl(urlOption));


// BONUS
const parseURL = (input: string): Url | null => {

  const isValidUrl = (urlString: string): boolean => {
      const urlPattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!urlPattern.test(urlString);
  }

  if (isValidUrl(input)) {
    const url = new URL(input);

    const searchQuery = url.search[0];
    const searchParameters = url.search.substring(2);

    const searchPort = url.host.split(':');
    const domainSplit = searchPort[0].split('.');

    // const domainNameLength = searchPort[0].split('.').length;

    const urlObject: Url = {
      protocol: url.protocol + '//',
      subdomain: domainSplit[0],
      domainName: searchPort[0],
      tld: 'co.uk',
      port: Number(searchPort[1]),
      path: url.pathname.substring(1),
      query: searchQuery,
      parameters: searchParameters,
      fragment: url.hash,
    }
    return urlObject;

  } else {
    return null;
  }
}

console.log(parseURL('https://video.google.co.uk:80/videoplay?&docid=-724692761283107823&hl=en#00h02m30s'));