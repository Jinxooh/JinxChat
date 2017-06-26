import React, { Component } from 'react';
import EyeCatchy from 'components/Common/EyeCatchy'; 
import LoginModal from 'components/Base/LoginModal';

class MainRoute extends Component {

    state = {
        hide: false
    };

    handleHide = () => {
        this.setState({
            hide: true
        })
    }

    handleShow = () => {
        this.setState({
            hide: false
        })
    }
    render() {
        const { hide } = this.state;
        const { handleHide, handleShow } = this;

        return (
            <div>
                <button onClick={handleShow}>CCCCCC</button>
                <EyeCatchy hidden={hide} onHide={handleHide}>
                    <LoginModal/>
                </EyeCatchy>
            </div>
        );
    }
}

export default MainRoute;