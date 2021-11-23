import React, {Component} from 'react';
import './Navbar.css'
import image1 from './index.png'
import downarrow from './doublearrow.png'

export default function Navbar(props) {
    return (
        <div>
            <nav className='NavbarItems'>
                <div>
                    <img
                        src={image1}
                        height = '60'
                        alt="Invoca Logo"
                    />
                </div>
                <div class='dropdown'>
                    <button class="dropbtn">
                        <div class="dashrect">Dashboard
                            <div class="weight1"/>
                            <img src={downarrow} alt="down" class="downarrow"/>
                        </div>
                    </button>
                    <div class="dropdown-content">
                        {props.loggedin === false && 
                            <p onClick = {() => props.handleRouteChange('login')} href="#0"> Log In </p>
                        }
                        {props.loggedin === true && 
                            <p onClick = {() => props.handleRouteChange('logout')} href="#0"> Log Out </p>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

// class Navbar extends Component{
//     render (){
//         return (
//             <nav className='NavbarItems'>
//                 <div>
//                     <img
//                         src={image1}
//                         height = '60'
//                         alt="Invoca Logo"
//                     />
//                 </div>
//                 <div class='dropdown'>
//                     <button class="dropbtn">
//                         <div class="dashrect">Dashboard
//                             <div class="weight1"/>
//                             <img src={downarrow} alt="down" class="downarrow"/>
//                         </div>
//                     </button>
//                     <div class="dropdown-content">
//                         <a href="login">Login</a>
//                         <a href="profile">Profile</a>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

// export default Navbar;