import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import AppBase from './components/AppBase';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}>
      <AppBase />
    </Provider>,
    document.getElementById('root')
);
