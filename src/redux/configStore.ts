import { combineReducers, createStore, compose } from 'redux';
import { oanTuTiReducer } from './reducers/oanTuTiReducer';

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
    composeEnhancers()
);