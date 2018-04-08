import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import createStore from './store/';
import reducer from './reducers';
import combineReducers from './combineReducers';

const data = {
  msg: 1,
  tbkt: 'F',
  path: 'a',
  appName: 'news'
};
ReactDOM.render(
  <App  store={createStore(combineReducers(reducer), data)} />,
  document.getElementById('root'),
);
