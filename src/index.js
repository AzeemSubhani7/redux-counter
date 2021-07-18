import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux Library
import {combineReducers, createStore, applyMiddleware} from 'redux'
// React-Redux
import {Provider} from 'react-redux'
// Redux middleware
import logger from 'redux-logger' // Redux-middle ware
// Reducers
import { countReducer } from './redux/reducers';

const rootReducer = combineReducers({
  counter: countReducer
})

const middleware = [logger]
// createStrone(X,Y)
// X root reducer
// Y middleware to apply
const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);