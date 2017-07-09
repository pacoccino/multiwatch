import { uniq } from 'lodash';
import { setSearch, setEchanges, setPairsByExchange, setSummaries } from './actions';
import { cwRequest } from '../helpers/http';
import cwMarkets from '../constants/markets';
import { CACHE_VERSION } from '../constants/appConstants';

import storage from '../helpers/storage';

export const appInit = () => (dispatch) => {
  dispatch(setSearch(''));
};

export const checkCache = () => () => {
  const cacheVersion = storage.get('cacheVersion');
  if(!cacheVersion || cacheVersion < CACHE_VERSION) {
    console.log('Old cache found, resetting ...');
    storage.clear();
    storage.set('cacheVersion', CACHE_VERSION)
  }
};

export const getMarkets = () => dispatch => {
  const marketsUrl = 'https://api.cryptowat.ch/markets';

  cwRequest(marketsUrl).then(markets => {
    const exchanges = uniq(markets.map(m => m.exchange));

    const pairsByExchange = exchanges.reduce((a, exchange) => ({
      ...a,
      [exchange]: cwMarkets.filter(m => m.exchange === exchange).map(m => m.currencyPair),
    }), {});

    dispatch(setEchanges(exchanges));
    dispatch(setPairsByExchange(pairsByExchange));
  });
};
export const getSummaries = () => dispatch => {

  const summariesUrl = 'https://api.cryptowat.ch/markets/summaries';

  cwRequest(summariesUrl).then(summaries => {
    dispatch(setSummaries(summaries));
  });
};

export const search = text => dispatch => {

}