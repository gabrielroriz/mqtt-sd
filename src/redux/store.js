import { createStore, compose, applyMiddleware } from 'redux';
import appReducer from './appReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(appReducer, composeEnhancer(applyMiddleware(thunk)));
}
