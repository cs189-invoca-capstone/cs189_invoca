import React, {useEffect, useState} from 'react';
import './LoginPage.css'
import arrow from './arrow.svg'
import axios from 'axios'

function LoginPage(props){
    async function loginUser(gmail, password){
        // props.handleLogIn(true);
        // props.handleRouteChange('home');
        console.log("entered login User");
        try{
            const res = await axios.post('/users/login', {
                email: gmail,
                password: password
            });
            // localStorage.setItem('user', res.data)
            console.log(res.data);
            props.handleLogIn(res.data);
            props.handleRouteChange('home');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='backgroundlogin' >
            <div className='loginsquare'>
                <div className='logintext'>Login</div>
                <div className='welcometext'>Welcome to Invoca!</div>
                <div style={{padding: 20}}>
                    <div className='smalltext'>Email address</div>
                    <input className="filloutbars" type="text" id="gmail"/>
                </div>
                <div style={{padding: 20}}>
                    <div className='smalltext'>Password</div>
                    <input className="filloutbars" type="password" id="password" />
                </div>
                <div className='createrow'>
                    <div className='createcolumn'>
                        <div className='newaccount'>New here?</div>
                        {/* <a className='newaccount' href='register'>Create an Account</a> */}
                        <p onClick = {() => props.handleRouteChange('register')} href="">Create an Account</p>
                    </div>
                    <div className='jankfix'>
                        <div id='circle' onClick = {
                            () => loginUser(document.getElementById("gmail").value,  document.getElementById('password').value)}>
                            <img src={arrow} alt="arrow" className='ellipse'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;