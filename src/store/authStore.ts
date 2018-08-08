import auth from "../auth";
export interface IAuth {
  formState: {
    username: string,
    password: string
  },
  error: string,
  currentlySending: boolean,
  loggedIn: boolean
}

export interface IAuthStore {
  auth: IAuth
}

// The initial application state
export const storeAuth: IAuth = {
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn()
};
