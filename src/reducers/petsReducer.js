import { SET_PETS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_PETS:
      return action.payload || false;
    default:
      return state;
  }
}
