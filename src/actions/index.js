import { CHANGE_AUTH } from './types';


export function authenticate(isLoggedIn) {
  const payload = (
    isLoggedIn === undefined
    || isNaN(isLoggedIn)
  )
  ? false : isLoggedIn;

  return {
    payload,
    type: CHANGE_AUTH,
  };
}
