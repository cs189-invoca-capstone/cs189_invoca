import React from 'react';
import './Navbar.css';
import image1 from './index.png';
import downarrow from './doublearrow.png';
import Button from 'react-bootstrap/Button';

export default function Navbar(props) {
    return (
        <div>
            <nav className='NavbarItems'>
                <div>
                    {props.loggedin === false && 
                            <div onClick={() => props.handleRouteChange('login')} href="">
                                <img
                                    src={image1}
                                    height = '60'
                                    alt="Invoca Logo"
                                />
                            </div>
                        }
                        {props.loggedin === true && 
                            <div onClick={() => props.handleRouteChange('home')} href="">
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
                        {props.loggedin === false && 
                            <Button variant="secondary" onClick={() => props.handleRouteChange('login')} href="">
                                Login
                            </Button>
                        }
                        {props.loggedin === true && 
                            <Button variant="secondary" onClick={() => props.handleRouteChange('logout')} href="">
                                Logout
                            </Button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}