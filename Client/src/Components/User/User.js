import React from 'react'
import Navigation from './Dashboard/Navigation';
import {Switch, Route } from 'react-router-dom';
import KeyRequest from './Dashboard/KeyRequest';
import KeyDownload from './Dashboard/KeyDownload';

function User() {
    return (
        <>
            <Navigation />
            <Switch>
                <Route path="/User/KeyRequest" component={KeyRequest} />
                <Route path="/User/KeyDownload" component={KeyDownload} />
            </Switch>
        </>
    )
}

export default User;
