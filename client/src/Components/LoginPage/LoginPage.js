import React, {Component, useEffect, useState} from 'react';
import './LoginPage.css'
import Navbar from '../Navigation/Navbar'
import arrow from './arrow.svg'
import axios from 'axios'

function LoginPage(){
    function loginUser(gmail, password){
        console.log(gmail)
        console.log(password)
    }
    return (
        <div>
        <Navbar/>
            <div className='background'>
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
                            <a className='newaccount' href='registerpage'>Create an Account</a>
                        </div>
                        <div className='jankfix'>
                            <div id='circle' onClick = {() =>loginUser(document.getElementById("gmail").value,  document.getElementById('password').value)}>
                                <img src={arrow} className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;