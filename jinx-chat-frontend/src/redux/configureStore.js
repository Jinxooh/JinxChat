import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// load modules
import base from './modules/base';
import form from './modules/form';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
/*configure Middleware*/
const middlewares = [promiseMiddleware()];
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose) : compose;
const createStoreWithMiddleware = applyMiddleware( ...middlewares)(createStore);


const reducer = combineReducers({
    // state.base <==== 이 base
    base,
    form,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState, composeEnhancers);

export default configureStore;
