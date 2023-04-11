import { createAsyncAction } from 'typesafe-actions';
import { ITestPlayer } from '.';

export const getPlayersStatistic = createAsyncAction(
  '$statistic/getPlayersStatistic/Request',
  '$statistic/getPlayersStatistic/Success',
  '$statistic/getPlayersStatistic/Failure'
)<void, ITestPlayer[], void>();
