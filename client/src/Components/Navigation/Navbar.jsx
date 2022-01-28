import React from 'react';
import './Navbar.css';
import image1 from './index.png';

import {Navbar as NavBar, Container, Nav, Col } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

export default function Navbar(props) {
    const history = useHistory();

    function loggingOut(){
        props.clearUser();
        history.push("/login");
    }
    
    return(
        <div>
            {props.user === null
            ?
            <NavBar bg="light" sticky="top">
                <Container>
                    <Col>
                        <NavBar.Brand as={Link} to="/">
                            <img
                                src={image1}
                                width="130"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Invoca Logo"
                            />
                        </NavBar.Brand>
                    </Col>
                    <Col>
                    <Nav className="justify-content-end">
                        <Nav.Item >
                            <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link as={Link} to="/register" >Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                </Container>
            </NavBar>
            :
            <NavBar bg="light" sticky="top">
                <Container>
                    <Col>
                        <NavBar.Brand as={Link} to="/">
                            <img
                                src={image1}
                                width="130"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Invoca Logo"
                            />
                        </NavBar.Brand>
                    </Col>
                    <Col>
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/profile" >Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/callLogs" >Call Logs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/add" >Add Call</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link as={Link} to="/login" onClick={() => loggingOut()} >Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                </Container>
            </NavBar>
        }
        </div>
    )
    
    
    /*
    return (
        <div>
            <nav className='NavbarItems'>
                <div>
                        {props.user == null 
                            ? 
                            <div onClick={() => history.push("/login")}>
                                <img
                                    src={image1}
                                    height = '60'
                                    alt="Invoca Logo"
                                />
                            </div>
                            :
                            <div onClick={() => history.push("/")}>
                                <img
                                    src={image1}
                                    height = '60'
                                    alt="Invoca Logo"
                                />
                            </div>
                        }
                </div>
                <div className='dropdown'>
                    <button className="dropbtn">
                        <div className="dashrect">Dashboard
                            <div className="weight1"/>
                            <img src={downarrow} alt="down" className="downarrow"/>
                        </div>
                    </button>
                    <div class="dropdown-content">
                        {props.user == null 
                            ?
                            <div className='navbarbutton' onClick={() => history.push('/login')}>
                                Login
                            </div>
                            :
                            <>
                                <div className='navbarbutton' onClick={() => history.push('/profile')}>
                                    Profile
                                </div>
                                <div className='navbarbutton' onClick={() => history.push('/callLogs')}>
                                    Data
                                </div>
                                <div className='navbarbutton' onClick={loggingOut()}>
                                    Logout
                                </div>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
    */          
}