import { CHANGE_AUTH } from '../actions/types';


export default function(state = false, action) {
  if(!action) {
    return state;
  }

  switch(action.type) {
    case CHANGE_AUTH:
      return action.payload === undefined ? state : action.payload;
  }

  return state;
}
