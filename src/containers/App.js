import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import reducer DUK
import * as modal from 'redux/modules/base/modal';
import * as authAction from 'redux/modules/base/auth';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton, UserButton, UserMenu } from 'components/Base/Header/Header';
import auth from 'helpers/firebase/auth';

import * as Modals from 'components/Base/Modals';
import users from 'helpers/firebase/database/users';

import storage from 'helpers/storage';

const { LoginModal, LinkAccountModal } = Modals;
const { SocialLoginButton } = LoginModal;

// import LoginModal, { SocialLoginButton } from 'components/Base/Modals';
// import LinkAccountModal from 'components/Base/Modals';

class App extends Component {
    
    static contextTypes = {
        router: PropTypes.object,
    }

    profileRef = null;
    
    componentWillMount() {
        const { AuthActions } = this.props;
        const profile = storage.get('profile');

        if(profile) {
            AuthActions.syncProfile(profile);
        }
    }
    
    async componentDidMount() {
        // auth.logout();
        auth.authStateChanged(
            async (firebaseUser) => {
                const { AuthActions } = this.props;
                
                // 프로필 동기화 중지
                if(this.profileRef) {
                    this.profileRef.off()
                    this.profileRef = null;
                }

                if(firebaseUser) {
                    AuthActions.authenticate(firebaseUser);
                    this.profileRef = users.findProfileByIdSync(firebaseUser.uid, (snapshot) => {
                        const profile = snapshot.val();
                        AuthActions.syncProfile(profile);

                        // profile is vailid => save to the localStorage
                        storage.set('profile', profile);
                    })
                    console.log('login', firebaseUser);
                    
                } else {
                    console.log('no login');
                }
            }
        )

        
    }

    handleAuth = async (provider) => {
        const { handleModal } = this;
        handleModal.close('login');
        
        try{
            const loginData = await auth.signInWithPopup(provider);

            // 해당 유저가 가입되어있는지 체크
            const uid = loginData.user.uid;
            const profile = await users.findProfileById(uid);
            
            if(profile.exists()) {
                // 이미 가입한 유저
            } else {
                // 안가입
                // this.context.router.push('/register');
                this.context.router.history.push('/register');
            }
        } catch(e) {
            if(e.code === "auth/account-exists-with-different-credential"){
                const exisitingProvider = await auth.getExistingProvider(e.email);

                handleModal.open({ 
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
        const { children, status: {modal, profile} } = this.props;
        const { handleModal, handleAuth, handleLinkAccount } = this;
        return (
            <div>
                <Header>
                    <SidebarButton/>
                    <BrandLogo/>
                    {profile.get('username') 
                    ? <UserButton onClick={() => console.log('fuck')} thumbnail={profile.get('thumbnail')}/>
                    : <AuthButton onClick={() => handleModal.open({modalName: 'login'})}/>
                    }
                    <UserMenu />
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
            modal: state.base.modal,
            profile: state.base.auth.get('profile'),
        }
    }),
    dispatch => ({
        ModalActions: bindActionCreators(modal, dispatch),
        AuthActions: bindActionCreators(authAction, dispatch),
    })
)(App);
