import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import reducer DUK
import * as modal from 'redux/modules/base/modal';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton } from 'components/Base/Header/Header';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import LinkAccountModal from 'components/Base/LoginModal/LinkAccountModal';
import auth from 'helpers/firebase/auth';
import * as users from 'helpers/firebase/database/users';

class App extends Component {

    componentDidMount() {
        auth.authStateChanged(
            async (firebaseUser) => {
                if(firebaseUser) {
                    console.log('login', firebaseUser);
                    
                    const user = await users.findUserById(firebaseUser.uid);
                    if(user.exists()){

                    } else {
                        await users.createUserData(firebaseUser); 
                    }
                    console.log(user);
                    console.log(user.val());

                    // modal close
                } else {
                    console.log('no login');
                }
            }
        )
    }

    handleAuth = (provider) => {
        this.handleModal.close('login');
        auth[provider]().catch(
            error => {
                if(error.code === "auth/account-exists-with-different-credential"){
                    //auth.resolveDuplicate(error);
                    this.handleModal.open({ 
                        modalName: 'linkAccount',
                        data: error
                    });
                }
            }
        );
    }

    handleModal = (() => {
        const { ModalActions } = this.props;
        return {
            open: ({ modalName, data }) => {
                ModalActions.modalOpen({ modalName, data });
            },
            close: (modalName) => {
                ModalActions.modalClose(modalName);
            }
        }
    })();

    render() {
        const { children, status: {modal} } = this.props;
        const { handleModal, handleAuth } = this;
        return (
            <div>
                <Header>
                    <SidebarButton/>
                    <BrandLogo/>
                    <AuthButton onClick={() => handleModal.open({modalName: 'login'})}/>
                </Header>
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={()=> handleModal.close('login')}>
                    <SocialLoginButton onClick={()=>{ handleAuth("github")}} types='github'/>
                    <SocialLoginButton onClick={()=>{ handleAuth("google")}} types='google'/>
                    <SocialLoginButton onClick={()=>{ handleAuth("facebook")}} types='facebook'/>
                </LoginModal>
                <LinkAccountModal visible={modal.getIn(['linkAccount', 'open'])} onHide={()=> handleModal.close('linkAccount')}/>
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
