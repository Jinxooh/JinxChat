import React from 'react';
import { Icon } from 'semantic-ui-react';

const SocialLoginButton = ({types, onClick}) => {
    return (
        <div className={`social-login-button ${types}`} onClick={onClick}>
           <Icon name={types}/><b>{types}</b> Account Login
        </div>
    );
};

export default SocialLoginButton;