import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// load modules
import base from './modules/base';
import form from './modules/form';
import register from './modules/register';

/*configure Middleware*/
const middlewares = [promiseMiddleware()];

const createStoreWithMiddleware = applyMiddleware( ...middlewares)(createStore);


const reducer = combineReducers({
    // state.base <==== 이 base
    base,
    form,
    register,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;
