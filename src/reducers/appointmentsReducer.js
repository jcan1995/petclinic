import { SET_APPOINTMENTS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_APPOINTMENTS:
      return action.payload || false;
    default:
      return state;
  }
}
