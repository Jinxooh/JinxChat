import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from 'containers/App';
import Routes from './Routes';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object,
}
export default Root;