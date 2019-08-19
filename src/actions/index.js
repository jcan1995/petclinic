/* Temp file to house all actions. */
import {
  SET_PETS,
  SET_VETS,
  SET_APPOINTMENTS,
  SET_MODAL
} from './types'

import { profileData } from '../resources/data.js';

export const setModal = (modalState) => {
  return { type: SET_MODAL, payload: modalState };
};

export const setAppointments = (appointments) => {
  // API call here to save and retrieve new appointment set
  return { type: SET_APPOINTMENTS, payload: appointments };
};

export const setPets = (pets) => {
  // API call here to save and retrieve new pet set
  return { type: SET_PETS, payload: pets };
};

export const setVeterinarians = (veterinarians) => {
  // API call here to save and retrieve new vet set
  return { type: SET_VETS, payload: veterinarians };
};

export const loadData = () => {
  const { appointments } = profileData;
  const { registeredPets } = profileData;
  const { registeredVeterinarians } = profileData;

  return dispatch => {
    dispatch(setAppointments(appointments));
    dispatch(setPets(registeredPets));
    dispatch(setVeterinarians(registeredVeterinarians));
  }
};
