/* global document:true */

import 'purecss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './main/';
import ReduxSample from './counter/';
import Board from './main/board';
import sampleApp from './root-reducer';

const store = createStore(
  sampleApp,
  applyMiddleware(thunk)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main} />
        <Route path="/board" component={Board} />
        <Route path="/redux" component={ReduxSample} />
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
