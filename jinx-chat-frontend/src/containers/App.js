import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import reducer DUK
import * as modal from 'redux/modules/base/modal';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton } from 'components/Base/Header/Header';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import auth from 'helpers/firebase/auth';
import * as users from 'helpers/firebase/database/users';

class App extends Component {

    componentDidMount() {
        // auth.logout();

        const { ModalActions } = this.props;
        
        auth.authStateChanged(
            async (firebaseUser) => {
                if(firebaseUser) {
                    console.log('login', firebaseUser);
             
                    const test = await users.findUserById(firebaseUser.uid);
                    console.log(test.val());
                    await users.createUserData(firebaseUser); 
                    ModalActions.modalClose('login');
                } else {
                    console.log('no login');
                }
            }
        )
    }

    handleAuth = (provider) => {
        auth[provider]().catch(
            error => {
                if(error.code === "auth/account-exists-with-different-credential"){
                    auth.resolveDuplicate(error);
                }
            }
        );
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
        const { handleLoginModal, handleAuth } = this;
        return (
            <div>
                <Header>
                    <SidebarButton/>
                    <BrandLogo/>
                    <AuthButton onClick={handleLoginModal.open}/>
                </Header>
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close}>
                    <SocialLoginButton onClick={()=>{ handleAuth("github")}} types='github'/>
                    <SocialLoginButton onClick={()=>{ handleAuth("google")}} types='google'/>
                    <SocialLoginButton onClick={()=>{ handleAuth("facebook")}} types='facebook'/>
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
