import React from 'react';
import './ProfilePage.css';

function ProfilePage(props) {

    return (
        <div class="h-screen w-screen">
            <div className='backgroundprofile'>
                <ul>
                    {Object.keys(props.user).map((keyName, i) => (
                        (keyName === '_id' || keyName === 'email' || keyName === 'invocaPhone')
                        &&  
                            <li>
                                {props.user[keyName]}
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;