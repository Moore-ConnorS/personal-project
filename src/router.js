import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Create from './components/creation/Create';
import Weather from './components/weather/Weather';
import UpdateEdit from './components/UpdateEdit/UpdateEdit';

export default (
    <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ Create } path='/create'/>
        <Route component={ Weather } path='/weather'/>
        <Route component={ UpdateEdit } path='/edit'/>
    </Switch>
)