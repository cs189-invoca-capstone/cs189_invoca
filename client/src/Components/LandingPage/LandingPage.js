import React from 'react';
import './LandingPage.css'
import bgimage from './bg-image.jpg'
import gears from './gears.png'
import handshake from './handshake.png'
import lock from './lock.png'
import Button from 'react-bootstrap/Button';

function LandingPage(){
    return (
        <div className='backgroundlanding'>
            <div className='imageholder'>
                <img src={bgimage} alt='man on phone' className='landingimage'/>
            </div>
            <div className='hazeonimage'/>
            <div className='containerfortext'>
                <div className='createrowlarge'>
                    <div className='welcometotext'>
                        Welcome to
                    </div>
                </div>
                <div className='textonlandingimage'>
                    Call Summerization
                </div>
                <div className='textbelow'>
                    a project by Invoca
                </div>
                <div>
                    
                </div>
            </div>
            <div className='bottomcontainer'>
                <div className='eachcontainer'>
                    <div className='circle3'>
                        <img src={gears} alt='gears' className='smallimage'/>
                    </div>
                    <div className="containerstart">
                        Machine Learning
                    </div>
                    <div className='containerbottom'>
                        Instant audio call Summerization using machine learning
                    </div>
                </div>
                <div className='eachcontainer'>
                    <div className='circle3'>
                        <img src={handshake} alt='gears' className='smallimage'/>
                    </div>
                    <div className="containerstart">
                        Trusted Resource
                    </div>
                    <div className='containerbottom'>
                        Join hundreds of other companies
                    </div>
                </div>
                <div className='eachcontainer'>
                    <div className='circle3'>
                        <img src={lock} alt='lock' className='smallimage'/>
                    </div>
                    <div className="containerstart">
                        Privacy
                    </div>
                    <div className='containerbottom'>
                        Feel secure in our state of the art hash system
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;