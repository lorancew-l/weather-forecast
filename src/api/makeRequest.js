const apiKey = process.env.REACT_APP_API_KEY;

export default function makeRequest({
  url = '/',
  params = {},
  method = 'GET',
  headers = {},
}) {
  params['appid'] = apiKey;

  const search = new URLSearchParams();
  for (const [param, value] of Object.entries(params)) {
    search.append(param, value);
  }

  url = new URL(url);
  url.search = search;

  return fetch(url.toString(), { method, params, headers });
}
