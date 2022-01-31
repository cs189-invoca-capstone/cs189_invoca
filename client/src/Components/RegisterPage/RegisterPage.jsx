import React from 'react';
import './RegisterPage.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function RegisterPage(props){
    const history = useHistory();

    async function registerUser(name, gmail, invocaPhone, password){
        // console.log("entered register User");
        console.log(name);
        console.log(gmail);
        console.log(invocaPhone);
        console.log(password);
        if (!name || !gmail || !invocaPhone || !password){
            alert("fill in information!")
        }
        else{
            // console.log("entered else register User");
            try{
                const res = await axios.post('/users/register', {
                    name: name,
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
                    <div style={{padding: 20}}>
                        <div className='registersmalltext'>Full Name</div>
                        <input className="filloutbars" type="text" id="name" />
                    </div>
                    <div style={{padding: 20}}>
                        <div className='registersmalltext'>Email Address</div>
                        <input className="filloutbars" type="text" id="gmail" />
                    </div>
                    <div style={{padding: 20}}>
                        <div className='registersmalltext'>Phone Number</div>
                        <input className="filloutbars" type="text" pattern="[0-9]*" id="phone"/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='registersmalltext'>Password</div>
                        <input className="filloutbars" type="password" id="password"/>
                    </div>
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <div className='newaccount' onClick={() => history.push("/login")} >Already have an account? Login here.</div>
                            <Button variant="secondary" onClick={() => registerUser(document.getElementById("name").value, document.getElementById("gmail").value, document.getElementById('phone').value, document.getElementById('password').value)}>
                                Create Account
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;