import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/home'
import Create from './components/creation/Create';


export default (
    <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ Create } path='/create'/>
    </Switch>
)