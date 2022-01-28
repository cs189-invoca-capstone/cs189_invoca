import React from 'react';
import "./EditProfilePage.css";
import "../ProfilePage/ProfilePage.css";
import arrow from '../LoginPage/arrow.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function EditProfilePage(props) {

    const history = useHistory();

    async function editUser(name, phone, gmail){
        // console.log("entered register User");
        let cont_form = true;
        if (phone) {
            if (phone.length === 10 || phone.length === 12) {
                for(let i = 0; i < phone.length; i++) {
                    if (phone[i] !== "-" && isNaN(phone[i])){
                        alert("please enter a valid phone number");
                        cont_form = false;
                        break;
                    }
                }
            } else {
                alert("please enter a valid phone number")
                cont_form = false;
            }
        } 
        if (cont_form) {
            if (!name && !gmail && !phone){
                alert("fill in some information!")
            } else{
                if (!gmail) {
                    gmail = props.user.email;
                }
                if (!name) {
                    name = props.user.name;
                }
                if (!phone) {
                    phone = props.user.invocaPhone;
                }
                try{
                    const res = await axios.put('/users/edit/' + props.user[Object.keys(props.user)[0]], { email: gmail, name: name, invocaPhone: phone});
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
                        speed=".5"
                        src="https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json"
                        style={{ height: '400px', width: '500px' }}
                        >
                    </Player>
                    <div style={{padding: 9}}>
                        <div className='smallEdittext'>Name</div>
                        <input className="filloutbars" type="text" id="name" />
                    </div>
                    <div style={{padding: 9}}>
                        <div className='smallEdittext'>Phone</div>
                        <input className="filloutbars" type="text" id="phone" />
                    </div>
                    <div style={{padding: 9}}>
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
                            <div id='circle' onClick = {() =>editUser(document.getElementById("name").value, document.getElementById("phone").value, document.getElementById('email').value)}>
                                <img src={arrow} alt="arrow" className='ellipse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
