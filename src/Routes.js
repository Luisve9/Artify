import React, { Profiler } from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Home from './app/views/home';
import SignUp from './app/views/signUp';
import LogIn from './app/views/logIn';
import Creator from './app/views/creator';
import Browse from './app/views/browse';
import MyDesigns from './app/views/myDesigns';
import MyProfile from './app/views/myProfile';
const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/menuCreator" component={Creator} />
        <Route exact path="/menuCreator/myDesigns" component={MyDesigns} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/myProfile" component={MyProfile}/>
    </Switch>
)

export default Routes