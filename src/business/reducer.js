import * as actions from './actions';
import { createReducer } from '../helpers/redux';

const initialState = {
  summaries: {},
  exchanges: [],
  pairsByExchanges: {},
  timePeriod: '4h',
  locker: true,
};

const setSummaries = (state, { summaries }) => ({
  ...state,
  summaries,
});
const setEchanges = (state, { exchanges }) => ({
  ...state,
  exchanges,
});
const setPairsByExchange = (state, { pairsByExchanges }) => ({
  ...state,
  pairsByExchanges,
});
const setTimePeriod = (state, { timePeriod }) => ({
  ...state,
  timePeriod,
});
const switchLocker = (state) => ({
  ...state,
  locker: !state.locker,
});

export default createReducer(initialState, {
  [actions.SET_SUMMARIES]: setSummaries,
  [actions.SET_EXCHANGES]: setEchanges,
  [actions.SET_PAIRS_BY_EXCHANGES]: setPairsByExchange,
  [actions.SET_TIME_PERIOD]: setTimePeriod,
  [actions.SWITCH_LOCKER]: switchLocker,
});
