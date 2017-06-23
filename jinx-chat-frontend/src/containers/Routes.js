import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './App';
import { MainRoute } from 'containers/route';
 
const Routes = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Switch>
                    <Route component={MainRoute}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;