import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './common/App';
import './assets/styles/main.scss';
import rootReducer from 'redux/reducers';
import thunk from 'redux-thunk';

let mwModules = [thunk];

const { createLogger } = require('redux-logger');

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false,
  diff: true
});

mwModules = [...mwModules, logger];

const middleware = applyMiddleware(...mwModules);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, reduxDevTools(middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

export type RootReducer = ReturnType<typeof rootReducer>;
