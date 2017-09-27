import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import { AppContainer } from 'react-hot-loader'

import firebaseHelper from './helpers/firebase';

import configureStore from './redux/configureStore';
import createBrowserHistory from 'history/createBrowserHistory';

const store = configureStore();

const rootElement = document.getElementById('root');

firebaseHelper.initialize();

const history = createBrowserHistory();

ReactDOM.render(
<AppContainer>
    <Root store={store} history={history}/>
</AppContainer>, rootElement
);

if(module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/Root').default;
        ReactDOM.render(
            <AppContainer>
                <NextRoot store={store} history={history}/>
            </AppContainer> ,rootElement
        )
    }); 
}