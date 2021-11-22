import Navbar from '../Navigation/Navbar'
import React, {useState, useEffect} from 'react';
import './ProfilePage.css'
import axios from 'axios'

// async function checkUser() {
//     axios.get('/user').then(res => {
//         console.log(res)
//     });
// }

function ProfilePage(props) {

    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [phoneNumber, setPhone] = useState('')
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        setLogged(props.loggedin)
    }, [props.loggedin])

    console.log(logged)

    if (props.loggedin){
        return (
            <div class="h-screen w-screen">
                <Navbar/>
                <div className='backgroundprofile'>
                    You are logged in
                </div>
            </div>
        )
    } else {
        return (
            <div class="h-screen w-screen">
                <Navbar/>
                <div className='backgroundprofile'>
                    you are not logged in
                </div>
            </div>
        );
    }
}

export default ProfilePage;