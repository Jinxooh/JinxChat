import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from 'containers/App';
import Routes from 'containers/routes/Routes';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object,
}
export default Root;