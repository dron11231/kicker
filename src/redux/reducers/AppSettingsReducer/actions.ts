import { IUserData } from 'service/user/types';
import { createAction } from 'typesafe-actions';

export const setUserData = createAction('$appSettings/setUserData')<IUserData>();
