import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import M from 'materialize-css';

import { getWindowPathname } from '../utils/WindowUtils';
import { MODAL_TYPES } from '../resources/constants';

import Header from './Header';
import BaseRoute from './BaseRoute';
import EntityViewContainer from './EntityViewContainer';
import AppointmentsContainer from './AppointmentsContainer';

import ModalContainer from './modals/ModalContainer';
import FloatingActionButton from './shared/FloatingActionButton';

class App extends Component {

  componentDidMount() {
    // Lets pump app data here;
    this.props.loadData();
    M.AutoInit();
  }

  addButtonClickHandler = () => {
    const path = getWindowPathname();
    const { setModal } = this.props;

    switch (path) {
      case '/pets':
        setModal({isOpen: true, type: MODAL_TYPES.ADD_PET});
        break;
      case '/veterinarians':
        setModal({isOpen: true, type: MODAL_TYPES.ADD_VET});
        break;
      case '/appointments':
        setModal({isOpen: true, type: MODAL_TYPES.ADD_EVENT});
        break;
      default:
        return;
    }
  }

  render() {
    const { modal: { isOpen } } = this.props;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ BaseRoute } />
            <Route exact path="/appointments" component={ AppointmentsContainer } />

            <Route
              path='/pets'
              component={() => <EntityViewContainer path={getWindowPathname()} />}
            />

            <Route
              path='/veterinarians'
              component={() => <EntityViewContainer path={getWindowPathname()} />}
            />

            <FloatingActionButton addItem={this.addButtonClickHandler} />
            { isOpen && <ModalContainer /> }

          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
