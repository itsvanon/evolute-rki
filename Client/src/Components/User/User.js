import React from 'react'
import Navigation from './Dashboard/Navigation';
import {Switch, Route } from 'react-router-dom';
import KeyRequest from './Dashboard/KeyRequest';
import KeyDownload from './Dashboard/KeyDownload';
import Tables from './Dashboard/Tables';

function User() {
    return (
        <>
            <Navigation />
            <Switch>
                <Route path="/User/KeyRequest" component={KeyRequest} />
                <Route path="/User/KeyDownload" component={KeyDownload} />
                <Route path="/User/Requests" component={Tables} />
            </Switch>
        </>
    )
}

export default User;
