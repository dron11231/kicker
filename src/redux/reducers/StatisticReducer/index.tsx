import { ActionType, createReducer } from 'typesafe-actions';
import * as a from './actions';

export interface ITestPlayer {
  name: string;
  id: number;
  rate: number;
}

export interface IStatisticState {
  playersStatistic: ITestPlayer[] | [];
  loading: boolean;
}

const initialState: IStatisticState = {
  playersStatistic: [],
  loading: false
};

export const statisticReducer = createReducer<IStatisticState, ActionType<typeof a>>(initialState)
  .handleAction(a.getPlayersStatistic.request, (state) => ({
    ...state,
    loading: true
  }))
  .handleAction(a.getPlayersStatistic.success, (state, action) => ({
    ...state,
    playersStatistic: action.payload,
    loading: false
  }));
