import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducer";
import createSagaMiddleware from '@redux-saga/core';
import rootsaga from './sagas';
const SagaMiddleware = createSagaMiddleware();
const store = new createStore(reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(rootsaga);
export default store;