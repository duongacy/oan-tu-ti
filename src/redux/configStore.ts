import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { oanTuTiReducer } from './reducers/oanTuTiReducer';
import mySaga from './saga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    oanTuTiState: oanTuTiReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    // composeEnhancers(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)