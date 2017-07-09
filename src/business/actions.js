export const SET_SUMMARIES = 'set-summaries';
export const SET_EXCHANGES = 'set-exchanges';
export const SET_PAIRS_BY_EXCHANGES = 'set-pairs-byexchange';
export const SET_TIME_PERIOD = 'set-timeperiod';
export const SWITCH_LOCKER = 'switch-locker';
export const SET_SEARCH = 'set-search';

export const setSummaries = summaries => ({
  type: SET_SUMMARIES,
  summaries,
});

export const setEchanges = exchanges => ({
  type: SET_EXCHANGES,
  exchanges,
});

export const setPairsByExchange = pairsByExchanges => ({
  type: SET_PAIRS_BY_EXCHANGES,
  pairsByExchanges,
});

export const setTimePeriod = timePeriod => ({
  type: SET_TIME_PERIOD,
  timePeriod,
});

export const switchLocker = () => ({
  type: SWITCH_LOCKER,
});

export const setSearch = search => ({
  type: SET_SEARCH,
  search,
});
