import React from 'react';
import './LoginPage.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

function LoginPage(props){
    const history = useHistory();

    async function loginUser(gmail, password){
        if (!gmail || !password){
            alert("fill in information!")
        }
        else{
            try{
                const res = await axios.post('/users/login', {
                    email: gmail,
                    password: password
                });
                // localStorage.setItem('user', res.data)
                // console.log(res.data);
                props.handleLogIn(res.data);
                history.push("/callLogs");
            }catch(err){
                console.log(err);
            }
        }
    }

    return (
        <div className='backgroundlogin' >
            <div className='loginsquare'>
                <div className='loginelements'>
                    <div className='logintext'>Login</div>
                    <div style={{padding: 20}}>
                        <div className='loginsmalltext'>Email Address</div>
                        <input className="filloutbars" type="text" id="gmail"/>
                    </div>
                    <div style={{padding: 20}}>
                        <div className='loginsmalltext'>Password</div>
                        <input className="filloutbars" type="password" id="password" />
                    </div>
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <div className='newaccount' onClick={() => history.push("/register")} >New here? Create an account.</div>
                            <Button variant="secondary" onClick={() => loginUser(document.getElementById("gmail").value,  document.getElementById('password').value)}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets7.lottiefiles.com/private_files/lf30_7z3j6ycb.json"
                        style={{ height: '400px', width: '500px' }}
                        >
                    </Player>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;