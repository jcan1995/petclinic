import { connect } from 'react-redux';
import { setModal } from '../actions';

import Appointments from './Appointments';

export const mapStateToProps = ({appointments, modal}) => {
  return {
    appointments,
    modal
  };
};

export const mapDispatchToProps = (dispatch) => {
  return ({
      setModal: modalState => { dispatch(setModal(modalState)) }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
