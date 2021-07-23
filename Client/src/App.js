import './App.css';
import React from 'react';
import LoginPage from './Components/Login/LoginPage';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact/>
          <Route path="/User" component={User} />
          <Route path="/Admin" component={Admin} />
        </Switch>
        {/* <User /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
