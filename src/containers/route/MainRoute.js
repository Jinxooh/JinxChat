import React, { Component } from 'react';
import Main, { CardContent } from 'components/Main/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainRoute extends Component {
    
    render() {
        const { status: { header }} = this.props;

        return (
            <Main hide={header.getIn(['userMenu', 'open'])}>
                <CardContent>
                </CardContent>
                <CardContent>
                </CardContent>
                <CardContent>
                </CardContent>
                <CardContent>
                </CardContent>
                <CardContent>
                </CardContent>
            </Main>
        );
    }
}

MainRoute = connect(
    state => ({
        status: {
            header: state.base.header,
        },
        form: {
            value: state.form.getIn(['register', 'username'])
        }
    }),
    dispatch => ({

    })
)(MainRoute);

export default MainRoute;