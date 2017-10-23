import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import reducer DUK
import * as modal from '../redux/modules/base/modal';
import * as authAction from '../redux/modules/base/auth';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton } from '../components/Base/Header/Header';
import auth from '../helpers/firebase/auth';
import * as users from '../helpers/firebase/database/users';

import * as Modals from '../components/Base/Modals';
const { LoginModal, LinkAccountModal } = Modals;
const { SocialLoginButton } = LoginModal;

// import LoginModal, { SocialLoginButton } from 'components/Base/Modals';
// import LinkAccountModal from 'components/Base/Modals';

class App extends Component {

    async componentDidMount() {
        auth.logout();
        auth.authStateChanged(
            async (firebaseUser) => {
                console.log('abc');
                const { AuthActions } = this.props;

                if(firebaseUser) {
                    AuthActions.authenticate(firebaseUser);
                    console.log('login', firebaseUser);
                    
                    const user = await users.findUserById(firebaseUser.uid);
                    if(!user.exists()){
                        console.log('!user.exists', user);
                        // await users.createUserData(firebaseUser); 
                    } else {
                        console.log(' user already!!');
                    }
                    // console.log(user);
                    // console.log(user.val());
                    const result = await users.findUserByUsername('asd123');
                    console.log(result.val());
                    // modal close
                } else {
                    console.log('no login');
                }
            }
        )
    }

    handleAuth = async (provider) => {
        this.handleModal.close('login');

        try{
            await auth[provider]();
        } catch(e) {
            if(e.code === "auth/account-exists-with-different-credential"){
                const exisitingProvider = await auth.getExistingProvider(e.email);

                this.handleModal.open({ 
                    modalName: 'linkAccount',
                    data: {
                        credential: e.credential,
                        provider,
                        exisitingProvider,
                    }
                });
            }
        }
    }

    handleLinkAccount = () => {
        const { status : { modal } } = this.props;
        const { handleModal } = this;

        const credential = modal.getIn(['linkAccount', 'credential']);
        const provider = modal.getIn(['linkAccount', 'exisitingProvider']);
        
        auth.linkAccount({provider, credential});
        handleModal.close('linkAccount');
    };

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
        const { handleModal, handleAuth, handleLinkAccount } = this;
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
                <LinkAccountModal 
                    visible={modal.getIn(['linkAccount', 'open'])} 
                    onHide={()=> handleModal.close('linkAccount')}
                    exisitingProvider={modal.getIn(['linkAccount', 'exisitingProvider'])}
                    provider={modal.getIn(['linkAccount', 'provider'])}
                    onLinkAccount={handleLinkAccount}
                />
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
        ModalActions: bindActionCreators(modal, dispatch),
        AuthActions: bindActionCreators(authAction, dispatch),
    })
)(App);
