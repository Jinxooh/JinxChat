import React, { Component } from 'react';
import Register from 'components/Register/Register';
import { connect } from 'react-redux';
import * as register from 'redux/modules/register';

import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';
import { Message } from 'semantic-ui-react';

const { TitleBar, PrevButton, Content, InputNickName } = Register;

class RegisterRoute extends Component {
    
    constructor(props) {
        super(props);
        this.handleCheckUsername = debounce(this.handleCheckUsername, 500);
    }

    handleRegister = async (username) => {
        const { status: { auth }} = this.props;
        const user = auth.get('user');
        const { uid, photoURL, email, displayName } = user;
    
        const { RegisterActions } = this.props;
        await RegisterActions.setUsername({uid, username});
        await RegisterActions.register({
            uid,
            username,
            displayName,
            email,
            thumbnail: photoURL,
        });
    }

    handleValidate = (username) => {
        const { RegisterActions } = this.props;
       
        const regex = /^[a-z0-9_]{4,20}$/;
        if(!regex.test(username)) {
            RegisterActions.setValidity({
                valid: false,
                message: 'wrong username, use 5 ~ 20 lower character and number and underscore',
            });
            return;
        } else {
            RegisterActions.setValidity({
                valid: true,
                message: '',
            });
        }
        this.handleCheckUsername(username);
    }

    handleCheckUsername = async (username) => {
        const { RegisterActions } = this.props;

        const result = await RegisterActions.checkUsername(username);
        if(!result.value.available) {
            RegisterActions.setValidity({
                valid: false,
                message: 'duplicated ID',
            });
        } else {
            RegisterActions.setValidity({
                valid: true,
                message: '',
            });
        }
    }

    render() {
        const { handleRegister, handleValidate } = this;
        const { status: { validation, loading }} = this.props;
        return (
            <div>
                <Register>
                    <TitleBar>
                        <PrevButton/>
                    </TitleBar>
                    <Content>
                        <InputNickName
                            onClick={handleRegister}
                            onValidate={handleValidate}
                            error={validation.valid === false}
                            loading={loading.checkUsername}
                        />
                        {
                            !validation.valid && (
                                <Message color='red'>
                                    { validation.message }
                                </Message>
                            )
                        }
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
            validation: state.register.get('validation'),
            loading: {
                checkUsername: state.register.getIn(['requests', 'checkUsername', 'fetching'])
            },
        }
    }),
    dispatch => ({
        // FormActions: bindActionCreators(form, dispatch),
        RegisterActions: bindActionCreators(register, dispatch)
    })
)(RegisterRoute);

export default RegisterRoute;