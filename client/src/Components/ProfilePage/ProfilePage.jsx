import React from 'react';
import './ProfilePage.css';
import profilepic from './blank-profile-picture.png'
import { Player } from '@lottiefiles/react-lottie-player';
import { useHistory } from 'react-router-dom';

function ProfilePage(props) {
    const history = useHistory();
    console.log(props.user)
    // const { email, invocaPhone } = props.user;
    // console.log(email, invocaPhone)

    return (
        // <div class="h-screen w-screen">
        //     <div className='backgroundprofile'>
        //         <div className='loginsquare'>
        //             <div id='circle2'>
        //                 <img src={profilepic} alt="profile" className='picture'/>
        //             </div>
        //             <Player
        //                 autoplay
        //                 loop
        //                 src="https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json"
        //                 style={{ height: '300px', width: '300px' }}
        //                 >
        //             </Player>
        //             <div className='logintext'>
        //                 Joe Doe
        //             </div>
        //             <div className=''>
        //                 Email: {props.user.email}
        //             </div>
        //             <div className=''>
        //                 {/* Phone: {invocaPhone} */}
        //                 Phone: {props.user.invocaPhone}
        //             </div>
        //             <div>
        //                 <br></br>
        //             </div>
        //             <div className='editbutton'>
        //                 <div className='dumb'>Edit</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class="h-screen w-screen">
            <div className='backgroundprofile'>
                <div className='profileInfo'>
                    <br></br><br></br>
                    <Player
                        autoplay
                        loop
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