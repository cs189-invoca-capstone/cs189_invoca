import Navbar from '../Navigation/Navbar'
import React, {useState, useEffect} from 'react';
import './ProfilePage.css'
import axios from 'axios'

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