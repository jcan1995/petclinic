import { connect } from 'react-redux';
import { loadData, setModal } from '../actions';

import App from './App';

export const mapStateToProps = ({modal}) => {
  return { modal };
};

export const mapDispatchToProps = (dispatch) => {
  return ({
      loadData: () => { dispatch(loadData()) },
      setModal: (modalState) => { dispatch(setModal(modalState)) }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
