import { ActionType, createReducer } from 'typesafe-actions';
import { IUserData } from 'service/user/types';
import * as a from './actions';

export interface IAppSettingsState {
  userData: IUserData;
}

const initialState: IAppSettingsState = {
  userData: {
    isMobile: false
  }
};

export const appSettingsReducer = createReducer<IAppSettingsState, ActionType<typeof a>>(
  initialState
).handleAction(a.setUserData, (state, action) => ({
  userData: {
    ...state.userData,
    ...action.payload
  }
}));
