import React from 'react';
import './Navbar.css';
import image1 from './index.png';
import downarrow from './doublearrow.png';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
    const history = useHistory();

    function loggingOut(){
        props.clearUser();
        history.push("/login");
    }

    return (
        <div>
            <nav className='NavbarItems'>
                <div>
                    {props.loggedin === false && 
                            <div onClick={() => history.push("/login")} href="">
                                <img
                                    src={image1}
                                    height = '60'
                                    alt="Invoca Logo"
                                />
                            </div>
                        }
                        {props.loggedin === true && 
                            <div onClick={() => history.push("/")} href="">
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
                            <div className='navbarbutton' onClick={() => history.push("/login")} href="">
                                Login
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={() => history.push("/profile")} href="">
                                Profile
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={() => history.push("/")} href="">
                                Data
                            </div>
                        }
                        {props.loggedin === true && 
                            <div className='navbarbutton' onClick={loggingOut()} href="">
                                Logout
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}