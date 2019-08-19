import { connect } from 'react-redux';

import { setModal, setPets, setVeterinarians, setAppointments } from '../../actions';

import ReactModal from './ReactModal';

export const mapStateToProps = ({modal, veterinarians, pets, appointments}) => {
  return {
    pets,
    modal,
    veterinarians,
    appointments
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (modal) => { dispatch(setModal(modal)) },
    setPets: (pets) => { dispatch(setPets(pets)) },
    setVets: (vets) => { dispatch(setVeterinarians(vets)) },
    setAppointments: (appointments) => { dispatch(setAppointments(appointments)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactModal);
