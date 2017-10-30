import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './App';
import { 
    MainRoute, 
    RegisterRoute, 
    ProfileRoute, 
    SettingRoute 
} from 'containers/route';

const Routes = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Switch>
                    <Route exact path='/' component={MainRoute}></Route>
                    <Route exact path='/register' component={RegisterRoute}></Route>
                    <Route exact path='/profile' component={ProfileRoute}></Route>
                    <Route exact path='/setting' component={SettingRoute}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;