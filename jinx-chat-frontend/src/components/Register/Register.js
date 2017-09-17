import React from 'react';
import TitleBar from './TitleBar';
import PrevButton from './PrevButton';
import Content from './Content';
import InputNickName from './InputNickName';

const Register = ({children}) => {
    return (
        <div>
            <div className="keypad-grid-wrapper">
                <div className="keypad-grid">
                    <div className="keystate-row"></div>
                    <div className="keypad-wrapper">
                        <div className="keypad-label">
                            <div className="label">abscefdc</div>
                            <div className="button">
                                <i aria-hidden="true" className="delete icon"></i>
                            </div>
                        </div>
                        <div className="keypad-row">
                            <div className="dial-button">1</div>
                            <div className="dial-button">2</div>
                            <div className="dial-button">3</div>
                        </div>
                        <div className="keypad-row">
                            <div className="dial-button">4</div>
                            <div className="dial-button">5</div>
                            <div className="dial-button">6</div>
                        </div>
                        <div className="keypad-row">
                            <div className="dial-button">7</div>
                            <div className="dial-button">8</div>
                            <div className="dial-button">9</div>
                        </div>
                        <div className="keypad-row">
                            <div className="dial-button">*</div>
                            <div className="dial-button">0</div>
                            <div className="dial-button">#</div>
                        </div>
                    </div>
                    <div className="keycall-row">
                        <button id="btnCallSend" className="ui green massive circular icon button">
                            <i aria-hidden="true" className="phone icon"></i>
                        </button>
                        <button id="btnCallEnd" className="ui red massive circular icon button">
                            <i aria-hidden="true" className="phone icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Register.TitleBar = TitleBar;
Register.PrevButton = PrevButton;
Register.Content = Content;
Register.InputNickName = InputNickName;

export default Register;