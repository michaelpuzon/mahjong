/* global document:true */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter';
import counterReducer from './reducers/counter';

const store = createStore(counterReducer);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
);

// store.subscribe(render);

