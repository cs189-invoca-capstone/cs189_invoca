import React, {Component} from 'react';
import './Navbar.css'
import image1 from './index.png'
import downarrow from './doublearrow.png'

class Navbar extends Component{
    render (){
        return (
            <nav className='NavbarItems'>
                <div>
                    <img
                        src={image1}
                        height = '60'
                    />
                </div>
                <div class='dropdown'>
                    <button class="dropbtn">
                        <div class="dashrect">Dashboard
                            <div class="weight1"/>
                            <img src={downarrow} class="downarrow"/>
                        </div>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Login</a>
                        <a href="#">Profile</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;