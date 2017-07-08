import { uniq } from 'lodash';
import { setEchanges, setPairsByExchange } from './actions';
import { cwRequest } from '../helpers/http';
import cwMarkets from '../constants/markets';

export const a = ({
}) => dispatch => new Promise((res) => {
  setTimeout(() => {
    res(true);
  }, 2000);
});

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