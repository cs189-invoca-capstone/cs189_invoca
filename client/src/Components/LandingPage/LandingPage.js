import React from 'react';
import './LandingPage.css'
import { Player } from '@lottiefiles/react-lottie-player';
import talktext from './TALK.png'

function LandingPage(){
    return (
        <div className='backgroundlanding'>
            <div className="loginSide">
                <img className='talktext' src={talktext} alt="talk"/>
                <Player
                        autoplay
                        loop
                        controls
                        mode="normal"
                        src="https://assets6.lottiefiles.com/private_files/lf30_vrcurbxk.json"
                        style={{ height: '400px', width: '500px' }}
                        />
            </div>
            <div className="infoSide">
                <div className="LandingPage-infobars">
                    <div>

                    </div>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json"
                        style={{ height: '25%', width: '50%'}}
                    />
                    1
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json"
                        style={{ height: '25%', width: '50%'}}
                    />
                    2
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json"
                        style={{ height: '25%', width: '50%'}}
                    />
                    3
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json"
                        style={{ height: '25%', width: '50%'}}
                    />
                    4
                </div>
            </div>
        </div>
    );
}

export default LandingPage;