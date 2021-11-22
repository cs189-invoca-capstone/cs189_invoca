import React from 'react';
import './LoginPage.css'
import Navbar from '../Navigation/Navbar'
import arrow from './arrow.svg'
// import axios from 'axios'

function LoginPage(){
    async function loginUser(gmail, password){
        console.log(gmail)
        console.log(password)
        try{
            const res = await axios.post('/users/login', {
                email: gmail,
                password: password
            });
            // localStorage.setItem('user', res.data)
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div>
        <Navbar/>
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
                            <a className='newaccount' href='register'>Create an Account</a>
                        </div>
                        <div className='jankfix'>
                            <div id='circle' onClick = {() =>loginUser(document.getElementById("gmail").value,  document.getElementById('password').value)}>
                                <img src={arrow} alt="arrow" className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;