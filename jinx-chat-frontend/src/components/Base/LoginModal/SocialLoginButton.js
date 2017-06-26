import React from 'react';
import { Icon } from 'semantic-ui-react';

const SocialLoginButton = ({types}) => {
    return (
        <div className={`social-login-button ${types}`}>
           <Icon name={types}/><b>{types}</b> Account Login
        </div>
    );
};

export default SocialLoginButton;