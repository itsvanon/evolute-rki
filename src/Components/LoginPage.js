import React from 'react';
import logo from '../evolutelogo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './LoginPage.css'; 

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

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
        </div>
    )
}

export default LoginPage;
