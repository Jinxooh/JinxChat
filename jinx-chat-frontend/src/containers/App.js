import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import reducer DUK
import * as modal from 'redux/modules/base/modal';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton } from 'components/Base/Header/Header';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import auth from 'helpers/firebase/auth';

class App extends Component {

    componentDidMount() {
        const { ModalActions } = this.props;
        
        auth.authStateChanged(
            (firebaseUser) => {
                if(firebaseUser) {
                    console.log('login', firebaseUser);

                    ModalActions.modalClose('login');
                } else {
                    console.log('no login');
                }
            }
        )
    }
    
    handleLoginModal = (() => {
        const { ModalActions } = this.props;
        return {
            open: (modalName) => {
                ModalActions.modalOpen({ modalName: 'login'});
            },
            close: (modalName) => {
                ModalActions.modalClose('login');
            }
        }     
    })();

    render() {
        const { children, status: {modal} } = this.props;
        const { handleLoginModal } = this;
        return (
            <div>
                <Header>
                    <SidebarButton/>
                    <BrandLogo/>
                    <AuthButton onClick={handleLoginModal.open}/>
                </Header>
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close}>
                    <SocialLoginButton onClick={auth.google} types='google'/>
                    <SocialLoginButton onClick={auth.facebook} types='facebook'/>
                </LoginModal>
                { children }
            </div>
        );
    }
}

export default connect(
    state => ({
        status: {
            modal: state.base.modal
        }
    }),
    dispatch => ({
        ModalActions: bindActionCreators(modal, dispatch)
    })
)(App);
