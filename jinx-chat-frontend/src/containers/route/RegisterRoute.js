import React, { Component } from 'react';
import Register from 'components/Register/Register';
import { connect } from 'react-redux';
import * as register from 'redux/modules/register';

import { bindActionCreators } from 'redux';

const { TitleBar, PrevButton, Content, InputNickName } = Register;

class RegisterRoute extends Component {
    // handleChnage = (e) => {
    //     const { FormActions } = this.props;
    //     FormActions.change({
    //         formName: 'register',
    //         name: 'username',
    //         value: e.target.value,
    //     });
    // }
    
    handleRegister = (username) => {
        const { status: { auth }} = this.props;
        
        const {uid, photoURL, displaynName } = auth;
        console.log('user',uid );

        const { RegisterActions } = this.props;
        RegisterActions.register({uid, photoURL, displaynName, username});
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
    state => (console.log(state.base.auth.get('user')),{
        status: {
            auth: state.base.auth.get('user'),
        }
    }),
    dispatch => ({
        // FormActions: bindActionCreators(form, dispatch)
        RegisterActions: bindActionCreators(register, dispatch)
    })
)(RegisterRoute);

export default RegisterRoute;