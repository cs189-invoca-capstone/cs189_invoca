import React, { useState } from 'react';
import './RegisterPage.css';
import arrow from '../LoginPage/arrow.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function RegisterPage(props){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function registerUser(gmail, invocaPhone, password){
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
                        <input className="filloutbars" onChange={handleChange} type="text" id="gmail" value={inputs.gmail}/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Your Phone Number</div>
                        <input className="filloutbars" onChange={handleChange} type="text" pattern="[0-9]*" id="phone" value={inputs.phone}/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Password</div>
                        <input className="filloutbars" onChange={handleChange} type="password" id="password" value={inputs.password}/>
                    </div>
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <div className='newaccount'>Already have an account?</div>
                            <Button variant="secondary" onClick={() => props.handleRouteChange('login')} href="" disabled={!inputs.gmail || !inputs.phone || !inputs.password}>
                                Login to Account
                            </Button>
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