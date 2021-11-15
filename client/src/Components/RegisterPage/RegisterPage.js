import Navbar from '../Navigation/Navbar'
import React, {Component, useEffect, useState} from 'react';
import './RegisterPage.css'
import arrow from '../LoginPage/arrow.svg'

function RegisterPage(){
    function registerUser(gmail, invocaPhone, password){
        console.log(gmail)
        console.log(invocaPhone)
        console.log(password)
    }

    return (
        <div class="h-screen">
        <Navbar/>
            <div className='backgroundregister'>
                <div className='registersquare'>
                    <div className='logintext'>Register</div>
                    <div className='welcometext'>Glad to finally meet you</div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Email address</div>
                        <input className="filloutbars" type="text" id="gmail"/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Your Phone Number</div>
                        <input className="filloutbars" type="text" pattern="[0-9]*" id="phone"/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Password</div>
                        <input className="filloutbars" type="password" id="password" />
                    </div>
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <div className='newaccount'>Already have an account?</div>
                            <a className='newaccount' href='login'>Login Here</a>
                        </div>
                        <div className='jankfix'>
                            <div id='circle' onClick = {() =>registerUser(document.getElementById("gmail").value, document.getElementById('phone').value, document.getElementById('password').value)}>
                                <img src={arrow} className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;