import React, { Profiler } from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Home from './app/views/home';
import SignUp from './app/views/signUp';
import LogIn from './app/views/logIn';

const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
    </Switch>
)

export default Routes