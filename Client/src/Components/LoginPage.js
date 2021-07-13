import React from 'react';
import logo from '../evolutelogo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './LoginPage.css'; 

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].fname);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn === true) {
                setLoginStatus(response.data.user.fname);
            }
        });
    }, []);

    return (
        <div className="form">
            <img src={logo} alt="evolute-logo"/>
            <hr />
            <Form className="form-main" onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicUsername">
                    <Form.Label className="form-labels">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <h1>Logged in as: {loginStatus}</h1>
        </div>
    )
}

export default LoginPage;
