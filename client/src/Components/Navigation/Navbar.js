import React, {Component, useEffect, useState} from 'react';
import './Navbar.css'
import image1 from './index.png'
import downarrow from './doublearrow.png'

const express = require("express");

function Navbar(props) {

    const [profile, setProfile] = useState([])
    const [loggedin, setLoggedin] = useState(false)



    if (!loggedin) return (
        <nav className='NavbarItems'>
            <div>
                <img
                    src={image1}
                    height = '60'
                    alt="Invoca Logo"
                />
            </div>
            <div class='dropdown'>
                <button class="dropbtn">
                    <div class="dashrect">Dashboard
                        <div class="weight1"/>
                        <img src={downarrow} alt="down" class="downarrow"/>
                    </div>
                </button>
                <div class="dropdown-content">
                    <a href="login">Login</a>
                    <a href="profile">Profile</a>
                </div>
            </div>
        </nav>
    );

    return (
        <nav className='NavbarItems'>
            <div>
                <img
                    src={image1}
                    height = '60'
                    alt="Invoca Logo"
                />
            </div>
            <div id='circle'>
                <img src={profile.}>
                    <a href="profile"/>
                </img>
            </div>
            <div class='dropdown'>
                <button class="dropbtn">
                    <div class="dashrect">Dashboard
                        <div class="weight1"/>
                        <img src={downarrow} alt="down" class="downarrow"/>
                    </div>
                </button>
                <div class="dropdown-content">
                    <a href="login">Login</a>
                    <a href="profile">Profile</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;