import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './App';
import { MainRoute, AuthRoute } from 'containers/route';

const Routes = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Switch>
                    <Route exact path='/' component={MainRoute}></Route>
                    <Route exact path='/auth' component={AuthRoute}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;