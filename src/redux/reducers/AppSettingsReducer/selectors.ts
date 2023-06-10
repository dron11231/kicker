import { RootReducer } from 'index';
import { IUserData } from 'service/user/types';

export const getUserData = (state: RootReducer): IUserData => state.appSettings.userData;
