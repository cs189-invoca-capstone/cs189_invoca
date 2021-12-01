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
                    <div onClick={() => props.handleRouteChange('home')} href="">
                        <img
                            src={image1}
                            height = '60'
                            alt="Invoca Logo"
                        />
                    </div>
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
                            <div className='navbarbutton' onClick={() => props.handleRouteChange('login')} href="">
                                Login
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={() => props.handleRouteChange('profile')} href="">
                                Profile
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={() => props.handleRouteChange('home')} href="">
                                Data
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={() => props.handleRouteChange('logout')} href="">
                                Logout
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}