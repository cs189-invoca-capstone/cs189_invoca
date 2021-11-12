import React, {Component, useEffect, useState} from 'react';
import './Navbar.css'
import image1 from './index.png'
import downarrow from './doublearrow.png'
import axios from 'axios'

async function loginPage() {
    axios.get('/login').then(res => {
        console.log(res)
     });
}

function Navbar(props) {

    const [profile, setProfile] = useState('')
    const [loggedin, setLoggedin] = useState(false)

    // useEffect(() => {
    //     const getProfile = async () => {
    //         try{
    //             // swap 0 with actual call id once we extract it from login
    //             // and once the databse actually stores the user ID
    //             const temp = await axios("users/profile");
    //             console.log(temp);
    //             setProfile(temp.email);
    //             console.log(profile)
    //         }catch(err){
    //             console.log(err);
    //         }
    //     };
    //     getProfile();
    //     setLoggedin(true)
    // }, [])

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
                <a href="profile">{profile}</a>
            </div>
            <div class='dropdown'>
                <button class="dropbtn">
                    <div class="dashrect">Dashboard
                        <div class="weight1"/>
                        <img src={downarrow} alt="down" class="downarrow"/>
                    </div>
                </button>
                <div class="dropdown-content">
                    {/* <button onClick= {() =>loginPage()}>Login</button> */}
                    <a href="login">Login</a>
                    <a href="profile">Profile</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;