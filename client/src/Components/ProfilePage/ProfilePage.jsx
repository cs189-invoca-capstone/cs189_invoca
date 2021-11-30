import React from 'react';
import './ProfilePage.css';
import profilepic from './blank-profile-picture.png'

function ProfilePage(props) {

    console.log(props.user)
    const { email, invocaPhone } = props.user;
    console.log(email, invocaPhone)

    return (
        <div class="h-screen w-screen">
            <div className='backgroundprofile'>
                <div className='loginsquare'>
                    <div id='circle2'>
                        <img src={profilepic} alt="profile" className='picture'/>
                    </div>
                    <div className='logintext'>
                        Joe Shmoe
                    </div>
                    <div className=''>
                        Email: {email}
                    </div>
                    <div className=''>
                        Phone: {invocaPhone}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;