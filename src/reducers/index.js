import { combineReducers } from 'redux';

import petsReducer from './petsReducer';
import appointmentsReducer from './appointmentsReducer';
import veterinarianReducer from './veterinarianReducer';
import modalReducer from './modalReducer';


export default combineReducers({
  pets: petsReducer,
  appointments: appointmentsReducer,
  veterinarians: veterinarianReducer,
  modal: modalReducer 
});
