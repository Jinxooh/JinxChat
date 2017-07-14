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

    render() {
        return (
            <div>
                <Register>
                    <TitleBar>
                        <PrevButton/>
                    </TitleBar>
                    <Content>
                        <InputNickName/>
                    </Content>
                </Register>
            </div>
        );
    }
}

RegisterRoute = connect(
    state => ({
        status: {
            user: state.auth.get('user'),
        }
    }),
    dispatch => ({
        // FormActions: bindActionCreators(form, dispatch)
        RegisterActions: bindActionCreators(register, dispatch)
    })
)(RegisterRoute);

export default RegisterRoute;