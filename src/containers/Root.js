import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from './Routes';

const Root = ({store, history}) => {
    return (
        <Provider store={store} history={history}>
            <Routes/>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
}
export default Root;