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