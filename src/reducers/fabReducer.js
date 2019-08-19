import { SET_FAB } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_FAB:
      return action.payload || false;
    default:
      return state;
  }
}
