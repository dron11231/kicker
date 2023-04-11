import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Action, applyMiddleware, compose, createStore } from 'redux';
import App from './common/App';
import './assets/styles/main.scss';
import rootReducer from 'redux/reducers';
import thunk, { ThunkAction } from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const composeEnhancers =
//   (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(rootReducer, composeEnhancers());

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

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export type RootStore = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnT = void> = ThunkAction<ReturnT, RootStore, unknown, Action<string>>;
