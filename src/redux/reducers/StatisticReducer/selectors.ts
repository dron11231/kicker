import { RootReducer } from 'index';
import { IPlayerData } from 'common/Statistic/types';

export const getIsLoading = (state: RootReducer): boolean => state.statistic.isLoading;

export const getPlayersStatistic = (state: RootReducer): IPlayerData[] =>
  state.statistic.playersStatistic;
