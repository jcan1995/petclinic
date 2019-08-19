import { SET_VETS } from '../actions/types';

const initialState = {
    name: "",
    age: "",
    specialization: "",
    assignedPets: [],
    upcomingAppointments: []
}

export default function(state = null, action) {
  switch (action.type) {
    case SET_VETS:
      return action.payload || false;
    default:
      return state;
  }
}
