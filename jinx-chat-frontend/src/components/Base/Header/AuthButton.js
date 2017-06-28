import React from 'react';
import { Icon } from 'semantic-ui-react';

const AuthButton = ({onClick}) => {
    const state = {
        login: false
    };

    return (
        <div className="auth-button-wrapper">
            <div className="auth-button" onClick={onClick}>
                <Icon name="user"/>Sign In / Sign Up
            </div>
        </div>
    );
};

export default AuthButton;