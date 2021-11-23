import React from 'react';
import './RegisterPage.css'
import arrow from '../LoginPage/arrow.svg'
import axios from 'axios'

function RegisterPage(props){
    async function registerUser(gmail, invocaPhone, password){
        // console.log(gmail)
        // console.log(invocaPhone)
        // console.log(password)

        // props.handleRouteChange('home');
        console.log("entered register User");
        try{
            const res = await axios.post('/users/register', {
                email: gmail,
                password: password,
                invocaPhone: invocaPhone
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
        <div class="h-screen">
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
                            <p className='newaccount' onClick = {() => props.handleRouteChange('login')} href="#0">Login to Account</p>
                        </div>
                        <div className='jankfix'>
                            <div id='circle' onClick = {() =>registerUser(document.getElementById("gmail").value, document.getElementById('phone').value, document.getElementById('password').value)}>
                                <img src={arrow} alt="arrow" className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;