import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navigation from './Dashboard/Navigation';
import Signup from './Dashboard/Signup';

function Admin() {
    return (
        <>
            <Navigation />
            <Switch>
                <Route path="/Admin/Signup" component={Signup} />
            </Switch>
        </>
    )
}

export default Admin
