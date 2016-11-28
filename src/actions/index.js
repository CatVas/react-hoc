import { CHANGE_AUTH } from './types';


export function authenticate(isLoggedIn) {
  return {
    payload: isLoggedIn,
    type: CHANGE_AUTH,
  };
}
