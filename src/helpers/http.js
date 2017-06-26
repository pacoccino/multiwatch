import superagent from 'superagent';

const CORS_PROXY = 'http://localhost:3001/cors?url=';

export const request = url => superagent(`${CORS_PROXY}${url}`).then(res => res.body);
export const cwRequest = url => request(url).then(res => res.result);