import { selectProperty } from '../helpers/redux';

export const selSummaries = selectProperty(['app', 'summaries'], []);
export const selExchanges = selectProperty(['app', 'exchanges'], []);
export const selPairsByExchange = selectProperty(['app', 'pairsByExchanges'], {});
export const selTimePeriod = selectProperty(['app', 'timePeriod'], '4H');
export const selLocker = selectProperty(['app', 'locker'], false);
