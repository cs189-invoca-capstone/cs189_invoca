import React from 'react';
import './ProfilePage.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { useHistory } from 'react-router-dom';

function ProfilePage(props) {
    const history = useHistory();
    console.log(props.user)

    return (
        <div class="h-screen w-screen">
            <div className='backgroundprofile'>
                <div className='profileInfo'>
                    <br></br><br></br>
                    <Player
                        autoplay
                        loop
                        speed=".5"
                        src="https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json"
                        style={{ height: '400px', width: '500px' }}
                        >
                    </Player>
                    <div className='profileName'>
                        {props.user.name}
                    </div>
                    <div className='profileNumber'>
                        Phone: {props.user.invocaPhone}
                    </div>
                    <div className='profileNumber'>
                        Email: {props.user.email}
                    </div>
                    <div>
                        <br></br>
                    </div>
                    <div className='editbutton' onClick={() => history.push("/editProfile")}>
                        <div className='editText'>Edit</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;