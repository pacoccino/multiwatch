import { createSelector } from 'reselect';
import { selectProperty } from '../helpers/redux';

export const selSummaries = selectProperty(['app', 'summaries'], []);
export const selExchanges = selectProperty(['app', 'exchanges'], []);
export const selPairsByExchange = selectProperty(['app', 'pairsByExchanges'], {});
export const selTimePeriod = selectProperty(['app', 'timePeriod'], '4H');
export const selLocker = selectProperty(['app', 'locker'], false);
export const selSearch = selectProperty(['app', 'search'], '');

export const selFilteredExchanges = createSelector(
  selExchanges,
  selSearch,
  (exchanges, search) => exchanges.filter(ex => ex.includes(search.toLowerCase())),
);

export const selFilteredPairsByExchange = createSelector(
  selExchanges,
  selPairsByExchange,
  selSearch,
  (exchanges, pairsByExchanges, search) =>
    exchanges.reduce((acc, exchange) => ({
      ...acc,
      [exchange]: pairsByExchanges[exchange].filter(pair => pair.includes(search.toLowerCase())),
    }), {}),
);