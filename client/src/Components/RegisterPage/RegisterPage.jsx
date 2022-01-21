import React from 'react';
import './RegisterPage.css';
import arrow from '../LoginPage/arrow.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function RegisterPage(props){
    const history = useHistory();

    async function registerUser(gmail, invocaPhone, password){
        // console.log("entered register User");
        if (!gmail || !invocaPhone || !password){
            alert("fill in information!")
        }
        else{
            // console.log("entered else register User");
            try{
                const res = await axios.post('/users/register', {
                    email: gmail,
                    password: password,
                    invocaPhone: invocaPhone
                });
                // localStorage.setItem('user', res.data)
                console.log(res.data);
                props.handleLogIn(res.data);
                history.push("/callLogs");
            }catch(err){
                console.log(err);
            }
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
                        <input className="filloutbars" type="text" id="gmail" />
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Your Phone Number</div>
                        <input className="filloutbars" type="text" pattern="[0-9]*" id="phone"/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smalltext'>Password</div>
                        <input className="filloutbars" type="password" id="password"/>
                    </div>
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <div className='newaccount'>Already have an account?</div>
                            <Button variant="secondary" onClick={() => history.push("/login")} >
                                Login
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