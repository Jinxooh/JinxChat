import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// load modules
import base from './modules/base';

/*configure Middleware*/
const middlewares = [promiseMiddleware()];

const createStoreWithMiddleware = applyMiddleware( ...middlewares)(createStore);


const reducer = combineReducers({
    // state.base <==== 이 base
    base,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;
