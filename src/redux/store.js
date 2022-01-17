import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';

// root reducer
// saga file

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run();

export default store;
