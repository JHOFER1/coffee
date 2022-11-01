import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from '../components/homepage';
import Courses from '../components/courses';
const Routes=() =>(
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/courses" component={Courses}/>
        <Redirect to='/'/>
    </Switch>
);
export default Routes;
