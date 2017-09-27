import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy'; 

class Modal extends Component {
    static propTypes = {
        // 모달을 숨기는 함수
        onHde: PropTypes.func,
        // 모달이 보여질지 말지 결정하는 값
        visible: PropTypes.bool,
        // 모달을 위한 엑스트라 함수
        className: PropTypes.string,
    }
    state = {
        closing: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(!this.props.visible && prevProps.visible){
            this.setState({
                closing: true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    })
                }, 700
            )

        }  
    }

    render() {
        const { children, visible, onHide, className } = this.props;
        const { closing } = this.state;

        if(!closing && !visible) return null;
        const animation = closing ? 'flipOutX' : 'flipInX';

        return (    
            <div>
                <div className="modal-wrapper">
                    <EyeCatchy onHide={onHide}>
                        <div ref={ref=>{this.modal = ref}} className={`modal ${animation} ${className}`}>
                            {children}
                        </div>
                    </EyeCatchy>
                </div>
                <Dimmer/>
            </div>
        );
    }
}

export default Modal;