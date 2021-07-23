import React, { useState } from 'react'
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import './SignupPage.css';

function SignupPage() {

    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [registered, setRegistered] = useState(false);
    const [showToast, setShowToast] = useState(true);

    const handleSubmit = (e) => {

        e.preventDefault();

        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8080/api/auth/signup";
        var logParas = JSON.stringify({"name": fullname, "username": username, "email": email, "password": password});
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState === xhr.DONE) {
                var status = xhr.status;

                if(status === 0 || (status >= 200 && status < 400)) {
                    setRegistered(true);
                }
                else {
                    alert("Cannot register user");
                }
            }
        };
        xhr.send(logParas);

    }

    const toastToggle = () => {
        setShowToast(!showToast);
        setRegistered(false);
    }

    return (
        <>
        {registered === true && (
                  <Toast bg="dark" delay="5000" show={showToast} onClose={toastToggle} style={{position: "fixed", top: 100, right: 50, backgroundColor: "darkgrey"}}>
                    <Toast.Header closeButton={true} style={{backgroundColor: "#343a40", color: "aliceblue"}}>
                      <strong className="me-auto">Evolute RKI</strong>
                    </Toast.Header>
                    <Toast.Body>User is successfully registered with User privileges.</Toast.Body>
                  </Toast>
        )}
        <div className="signup-form">
            <Form className="signup-main" onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="form-labels">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="form-labels">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridFullname">
                        <Form.Label className="form-labels">Fullname</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" value={fullname} onChange={e => setFullname(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formGridUsername">
                        <Form.Label className="form-labels">Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button variant="dark" type="submit">
                    Register
                </Button>
            </Form>
        </div>
        </>
    )
}

export default SignupPage
