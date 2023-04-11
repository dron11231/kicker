import { combineReducers } from 'redux';
import { statisticReducer } from './StatisticReducer';

const rootReducer = combineReducers({
  statistic: statisticReducer
});

export default rootReducer;
