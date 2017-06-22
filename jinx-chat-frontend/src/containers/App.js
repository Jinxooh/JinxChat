import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {

    state = {
        value: 0
    }
    componentDidMount() {
        const { HeaderAction } = this.props;
        HeaderAction.example(false);
    }

    render() {
        const { chidren } = this.props;
        return (
            <div>

                <h1>작동합니다!!</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.setState({ value: this.state.value + 1 })}>BUTTONNN!!</button>
                {chidren}
            </div>
        );
    }
}

export default connect(
    state => ({
        status: {
            something: state.base.header.get('something')
        }
    }),
    dispatch => ({
        HeaderAction: bindActionCreators(header, dispatch)
    })
)(App);
