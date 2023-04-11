import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IStatisticState } from 'redux/reducers/StatisticReducer';
import { getPlayersStatistic } from 'redux/reducers/StatisticReducer/actions';

export const getStatistic = () => {
  return async (dispatch: ThunkDispatch<IStatisticState, void, AnyAction>) => {
    try {
      dispatch(getPlayersStatistic.request());
      const result = await axios.get('http://localhost:8081/achivki/statistics/summary');

      console.log(result);
    } catch {
      dispatch(getPlayersStatistic.failure());
    }
  };
};
