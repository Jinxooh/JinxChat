import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Register from 'components/Register/Register';
import { connect } from 'react-redux';
import * as register from 'redux/modules/register';
import * as form from 'redux/modules/form';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';
import { Message } from 'semantic-ui-react';

const { TitleBar, PrevButton, Content, InputNickName, Loader } = Register;

class RegisterRoute extends Component {
    
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.handleCheckUsername = debounce(this.handleCheckUsername, 500);
    }

    handleChange = (e) => {
        const { FormActions } = this.props;
        const value = e.target.value;
        FormActions.change({
            formName: 'register',
            name: 'username',
            value
        });

        this.handleValidate(value);
    }

    componentDidMount() {
        const { FormActions, status: { auth }} = this.props;
        FormActions.initialize('register');
        console.log(auth.get('profile'));
    }

    componentDidUpdate(prevProps, prevState) {
        const { status: { auth }} = this.props;
        if(auth.getIn(['profile', 'username'])) {
            this.context.router.history.push('/');
        }
    }

    handleRegister = async () => {
        const { status: { auth }, form } = this.props;
        const username = form.value;
        const user = auth.get('user');
        
        const { uid, photoURL, email, displayName } = user;
        const { RegisterActions } = this.props;

        try{
            await RegisterActions.setUsername({uid, username});
            await RegisterActions.register({
                uid,
                username,
                displayName,
                email,
                thumbnail: photoURL,
            });

            // 가입 성공
            this.context.router.history.push('/');

        } catch(e) {
            // 가입 실패
            // 
            console.log(e);
            const { FormActions, RegisterActions } = this.props;
            FormActions.change({
                formName: 'register',
                name: 'username',
                value: '',
            });

            RegisterActions.setValidity({
                valid: false,
                message: 'Unknown Error occurs! Please try again!',
            });
        }
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
        const { handleRegister, handleValidate, handleChange } = this;
        const { status: { validation, loading, auth  }, form: { value }} = this.props;
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
                            loading={loading}
                            onChange={handleChange}
                            value={value}
                        />
                        {
                            !validation.valid && (
                                <Message color='red'>
                                    { validation.message }
                                </Message>
                            )
                        }
                        <Loader visible={!auth.get('profileSync')} />
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
                checkUsername: state.register.getIn(['requests', 'checkUsername', 'fetching']),
                setUsername: state.register.getIn(['requests', 'setUsername', 'fetching']),
                register: state.register.getIn(['requests', 'register', 'fetching']),
            },
        },
        form: {
            value: state.form.getIn(['register', 'username'])
        }
    }),
    dispatch => ({
        FormActions: bindActionCreators(form, dispatch),
        RegisterActions: bindActionCreators(register, dispatch)
    })
)(RegisterRoute);

export default RegisterRoute;