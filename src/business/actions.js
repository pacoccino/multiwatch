export const SET_EXCHANGES = 'set-exchanges';
export const SET_PAIRS_BY_EXCHANGES = 'set-pairs-byexchange';

export const setEchanges = exchanges => ({
  type: SET_EXCHANGES,
  exchanges,
});

export const setPairsByExchange = pairsByExchanges => ({
  type: SET_PAIRS_BY_EXCHANGES,
  pairsByExchanges,
});
