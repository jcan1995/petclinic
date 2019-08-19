import { connect } from 'react-redux';
import EntityView from './EntityView';
import { setModal } from '../actions';

const mapStateToProps = ({pets, veterinarians, modal}) => {
  return {
    pets,
    vets: veterinarians,
    modal
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    setModal: modalState => { dispatch(setModal(modalState)); }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EntityView)
