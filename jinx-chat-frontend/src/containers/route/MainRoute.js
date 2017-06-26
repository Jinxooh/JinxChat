import React, { Component } from 'react';
import EyeCatchy from 'components/Common/EyeCatchy'; 

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
                    <div>HEY MF</div>
                </EyeCatchy>
            </div>
        );
    }
}

export default MainRoute;