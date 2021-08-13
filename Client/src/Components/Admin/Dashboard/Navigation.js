import React from 'react';
import '../Admin.css';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function Navigation() {

    const history = useHistory();

    const handleLogout = (e) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("roleType");
        history.push("/")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="sticky">
                <Container>
                    <Navbar.Brand href="http://evolute.in" className="navbarbrand"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <Link to="/Admin/Signup">Register</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/Admin/Requests">Requests</Link>
                            </Nav.Link>
                            <Button variant="secondary" size="sm" active onClick={handleLogout}>
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;