import { IPlayerData } from 'common/Statistic/types';
import { createAsyncAction } from 'typesafe-actions';

export const getPlayersStatistic = createAsyncAction(
  '$statistic/getPlayersStatistic/Request',
  '$statistic/getPlayersStatistic/Success',
  '$statistic/getPlayersStatistic/Failure'
)<void, IPlayerData[], void>();
