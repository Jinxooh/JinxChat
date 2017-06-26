import React from 'react';
import { Icon } from 'semantic-ui-react';

const AuthButton = () => {
    return (
        <div className="auth-button-wrapper">
            <div className="auth-button">
                <Icon name="user"/>Sign In / Sign Up
            </div>
        </div>
    );
};

export default AuthButton;