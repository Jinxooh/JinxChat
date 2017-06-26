import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// load component
import Header, { BrandLogo, SidebarButton, AuthButton } from 'components/Base/Header/Header';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';


class App extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header>
                    <SidebarButton/>
                    <BrandLogo/>
                    <AuthButton/>
                </Header>
                <LoginModal>
                    <SocialLoginButton types='google'/>
                    <SocialLoginButton types='facebook'/>
                </LoginModal>
                { children }
            </div>
        );
    }
}

export default connect(
    state => ({
        status: {
            something: state.base.header.get('something')
        }
    }),
    dispatch => ({
        HeaderAction: bindActionCreators(header, dispatch)
    })
)(App);
