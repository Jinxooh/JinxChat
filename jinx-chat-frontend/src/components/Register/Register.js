import React from 'react';
import TitleBar from './TitleBar';
import PrevButton from './PrevButton';
import Content from './Content';
import InputNickName from './InputNickName';

const Register = ({children}) => {
    return (
        <div className="register">
            {children}
        </div>
    );
};

Register.TitleBar = TitleBar;
Register.PrevButton = PrevButton;
Register.Content = Content;
Register.InputNickName = InputNickName;

export default Register;