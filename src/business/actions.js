export const SET_EXCHANGES = 'set-exchanges';
export const SET_PAIRS_BY_EXCHANGES = 'set-pairs-byexchange';
export const SET_TIME_PERIOD = 'set-timeperiod';
export const SWITCH_LOCKER = 'set-locker';

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
