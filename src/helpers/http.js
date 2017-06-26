import superagent from 'superagent';

const CORS_PROXY = 'https://cors-proxy-ngfar.herokuapp.com/cors?url=';

export const request = url => superagent(`${CORS_PROXY}${url}`).then(res => res.body);
export const cwRequest = url => request(url).then(res => res.result);