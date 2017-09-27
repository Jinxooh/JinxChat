import React, { Component } from 'react';
import Register from 'components/Register/Register';
import { connect } from 'react-redux';
import * as register from 'redux/modules/register';

import { bindActionCreators } from 'redux';

const { TitleBar, PrevButton, Content, InputNickName } = Register;

class RegisterRoute extends Component {
    
    handleRegister = (username) => {
        const { status: { auth }} = this.props;
        const user = auth.get('user');
        const { uid, photoURL, email, displayName } = user;
    
        const { RegisterActions } = this.props;
        RegisterActions.register({
            uid,
            username,
            displayName,
            email,
            thumbnail: photoURL,
        });
    }

    render() {
        const { handleRegister } = this;
        return (
            <div>
                <Register>
                    <TitleBar>
                        <PrevButton/>
                    </TitleBar>
                    <Content>
                        <InputNickName onClick={handleRegister}/>
                    </Content>
                </Register>
            </div>
        );
    }
}

RegisterRoute = connect(
    state => ({
        status: {
            auth: state.base.auth,
        }
    }),
    dispatch => ({
        // FormActions: bindActionCreators(form, dispatch),
        RegisterActions: bindActionCreators(register, dispatch)
    })
)(RegisterRoute);

export default RegisterRoute;