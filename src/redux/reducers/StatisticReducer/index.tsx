import { ActionType, createReducer } from 'typesafe-actions';
import * as a from './actions';
import { IPlayerData } from 'common/Statistic/types';

export interface IStatisticState {
  playersStatistic: IPlayerData[];
  isLoading: boolean;
}

const initialState: IStatisticState = {
  playersStatistic: [],
  isLoading: false
};

export const statisticReducer = createReducer<IStatisticState, ActionType<typeof a>>(initialState)
  .handleAction(a.getPlayersStatistic.request, (state) => ({
    ...state,
    isLoading: true
  }))
  .handleAction(a.getPlayersStatistic.success, (state, action) => ({
    ...state,
    playersStatistic: action.payload,
    isLoading: false
  }));
