import { selectProperty } from '../helpers/redux';

export const selExchanges = selectProperty(['app', 'exchanges'], []);
export const selPairsByExchange = selectProperty(['app', 'pairsByExchanges'], {});
