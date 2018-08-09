import {createSelector} from "reselect";
import {IStoreState} from '../store/store';

export const getGreeting = createSelector(
  (state: IStoreState) => state.auth.loggedIn,
  (state: IStoreState) => state.auth.formState.username,
  (authStatus: boolean, username: string) => {
    console.log(authStatus); //tslint:disable-line
    return authStatus ? `欢迎，${username}！` : '您还未登录。';
  }
);
