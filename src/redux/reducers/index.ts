import { combineReducers } from 'redux';
import { statisticReducer } from './StatisticReducer';
import { appSettingsReducer } from './AppSettingsReducer';

const rootReducer = combineReducers({
  statistic: statisticReducer,
  appSettings: appSettingsReducer
});

export default rootReducer;
