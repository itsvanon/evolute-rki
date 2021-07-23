import React from 'react';
import logo from '../../evolutelogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './LoginPage.css'; 
import { useHistory } from 'react-router-dom';

function LoginPage() {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);

        var http = new XMLHttpRequest();
        var url = "http://localhost:8080/api/auth/signin";
        var logParas = JSON.stringify({"usernameOrEmail": username, "password": password});
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.onreadystatechange = function() {

            if(http.readyState === XMLHttpRequest.DONE) {

                var status = http.status;
                if(status === 0 || (status >= 200 && status < 400)) {
                    console.log(http.responseText);
                    const data = JSON.parse(http.responseText);
                    console.log(data.roleType);
                    localStorage.setItem("accessToken", data.accessToken)
                    localStorage.setItem("roleType", data.roleType);
                    switch(data.roleType) {
                        case "":
                            history.push("/");
                            break;
                        case "ROLE_USER":
                            history.push("/User");
                            break;
                        case "ROLE_ADMIN":
                            history.push("/Admin");
                            break;
                        default:
                            break;
                    }
                }
                else {
                    alert("Invalid Login");
                }
            }
        };

        http.send(logParas);
    }

    return (
        <div className="form">
            <img src={logo} alt="evolute-logo"/>
            <hr />
            <Form className="form-main" onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicUsername">
                    <Form.Label className="form-labels">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username/Email" value={username} onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage;


// const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    // const [loginStatus, setLoginStatus] = useState('');

    // Axios.defaults.withCredentials = true;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     Axios.post('http://localhost:3001/login', {
    //         username: username, 
    //         password: password,
    //     }).then((response) => {
    //         if (response.data.message) {
    //             setLoginStatus(response.data.message);
    //         } else {
    //             setLoginStatus(response.data[0].fname);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/login").then((response) => {
    //         if(response.data.loggedIn === true) {
    //             setLoginStatus(response.data.user.fname);
    //         }
    //     });
    // }, []);