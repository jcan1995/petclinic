import { SET_MODAL } from '../actions/types';

const initialState = {
    isOpen: false,
    type: '',
    items: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL:
      return action.payload || false;
    default:
      return state;
  }
}
