import React, { Component } from 'react';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy'; 
import SocialLoginButton from './SocialLoginButton';

class LoginModal extends Component {
    
    state = {
        closing: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(!this.props.visible && prevProps.visible){
            this.setState({
                closing: true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    })
                }, 700
            )

        }  
    }

    render() {
        const { children, visible, onHide } = this.props;
        const { closing } = this.state;

        if(!closing && !visible) return null;
        const animation = closing ? 'flipOutX' : 'flipInX';

        return (    
            <div>
                <div className="login-modal-wrapper">
                    <EyeCatchy onHide={onHide}>
                    <div className={`login-modal ${animation}`}>
                        <div className="exit" onClick={onHide}>x</div>
                        <div className="logo">Jinx's Chat</div>
                        <div className="description">
                            <p>This is description sample</p>
                            <p>you have to make a sentence here!</p>
                            <p>I'm fucking hungry</p>
                        </div>
                        <div className="button-wrapper"> {children} </div>
                    </div>
                    </EyeCatchy>
                </div>
                <Dimmer/>
            </div>
        );
    }
}

LoginModal.SocialLoginButton = SocialLoginButton;
export default LoginModal;