import React, { Component } from 'react';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy'; 

class LoginModal extends Component {

    render() {
        const { children } = this.props;

        return (
            <div>
                <div className="login-modal-wrapper">
                    <div className="login-modal">
                        <div className="exit">x</div>
                        <div className="logo">Jinx's Chat</div>
                        <div className="description">
                            <p>This is description sample</p>
                            <p>you have to make a sentence here!</p>
                            <p>I'm fucking hungry</p>
                        </div>
                        <div className="button-wrapper"> {children} </div>
                    </div>
                </div>
                <Dimmer/>
            </div>
        );
    }
}

export { default as SocialLoginButton } from './SocialLoginButton';
export default LoginModal;