import React from 'react';
import "./EditProfilePage.css";
import arrow from '../LoginPage/arrow.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function EditProfilePage(props) {

    const history = useHistory();

    async function editUser(name, gmail){
        // console.log("entered register User");
        
        if (!name && !gmail){
            alert("fill in either information!")
        }
        else{
            if(!name && gmail){
                try{
                    const res = await axios.put('/users/edit/' + props.user[Object.keys(props.user)[0]], {
                        email: gmail
                    });
                    props.clearUser();
                    props.handleLogIn(res.data);
                    history.push("/profile");
                }catch(err){
                    console.log(err);
                }
            }
            else if(name && !gmail){
                try{
                    const res = await axios.put('/users/edit/' + props.user[Object.keys(props.user)[0]], {
                        name: name
                    });
                    props.clearUser();
                    props.handleLogIn(res.data);
                    history.push("/profile");
                }catch(err){
                    console.log(err);
                }
            }
            else{
                try{
                    const res = await axios.put('/users/edit/' + props.user[Object.keys(props.user)[0]], {
                        name: name,
                        email: gmail
                    });
                    props.clearUser();
                    props.handleLogIn(res.data);
                    history.push("/profile");
                }catch(err){
                    console.log(err);
                }
            }
        }
    }

    return (
        <div class="h-screen w-screen">
            <div className='backgroundprofile'>
                <div className='profileInfo'>
                    <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json"
                        style={{ height: '400px', width: '500px' }}
                        >
                    </Player>
                    <div style={{padding: 20}}>
                        <div className='smallEdittext'>Name</div>
                        <input className="filloutbars" type="text" id="name" />
                    </div>
                    <div style={{padding: 20}}>
                        <div className='smallEdittext'>Email</div>
                        <input className="filloutbars" type="text" id="email" />
                    </div>
                    {/* <div style={{padding: 20}}>
                        <div className='smalltext'>Your Phone Number</div>
                        <input className="filloutbars" type="text" pattern="[0-9]*" id="phone"/>
                    </div> */}
                    {/* <div style={{padding: 20}}>
                        <div className='smalltext'>Password</div>
                        <input className="filloutbars" type="password" id="password"/>
                    </div> */}
                    <div className='createrow'>
                        <div className='createcolumn'>
                            <Button variant="secondary" onClick={() => history.push("/profile")} >
                                Back
                            </Button>
                        </div>
                        <div className='jankfix'>
                            {/* <div id='circle' onClick = {() =>registerUser(document.getElementById("name").value, document.getElementById('phone').value, document.getElementById('password').value)}>
                                <img src={arrow} alt="arrow" className='ellipse'/>
                            </div> */}
                            <div id='circle' onClick = {() =>editUser(document.getElementById("name").value, document.getElementById('email').value)}>
                                <img src={arrow} alt="arrow" className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
