import React, {Component} from 'react';
import './Navbar.css'
import image1 from './index.png'
import downarrow from './doublearrow.png'

class Navbar extends Component{
    render (){
        return (
            <nav className='NavbarItems'>
                <div>
                    <a href="/">
                        <img
                            src={image1}
                            height = '60'
                            alt="Invoca Logo"
                        />
                    </a>
                </div>
                <div className='dropdown'>
                    <button className="dropbtn">
                        <div className="dashrect">Dashboard
                            <div className="weight1"/>
                            <img src={downarrow} alt="down" className="downarrow"/>
                        </div>
                    </button>
                    <div className="dropdown-content">
                        <a href="login">Login</a>
                        <a href="profile">Profile</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;