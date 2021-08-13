import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navigation from './Dashboard/Navigation';
import Signup from './Dashboard/Signup';
import Tables from './Dashboard/Tables';

function Admin() {
    return (
        <>
            <Navigation />
            <Switch>
                <Route path="/Admin/Signup" component={Signup} />
                <Route path="/Admin/Requests" component={Tables} />
            </Switch>
        </>
    )
}

export default Admin
