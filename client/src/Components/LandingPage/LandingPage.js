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
                        mode="bounce"
                        speed=".25"
                        src="https://assets6.lottiefiles.com/private_files/lf30_vrcurbxk.json"
                        style={{ height: '400px', width: '500px' }}
                        />
            </div>
            <div className="infoSide">
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        speed=".5"
                        src="https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json"
                        style={{ height: '25%', width: '30%'}}
                    />
                    <p>
                        Talk to your heart's content as our platform uses state-of-the-art technology to <strong>Transcribe</strong> your calls for easy access later on.
                    </p>
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        speed=".65"
                        src="https://assets2.lottiefiles.com/datafiles/WLZxDkEn1AQcp9K/data.json"
                        style={{ height: '25%', width: '35%'}}
                    />
                    <p>
                        Our <strong>Artificial</strong> Intelligence helps you stay at the top of your game by generating sentiment analysis, summaries, and keywords that come up most in your calls. 
                    </p>
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        speed=".75"
                        src="https://assets1.lottiefiles.com/packages/lf20_2FrNS5.json"
                        style={{ height: '25%', width: '45%'}}
                    />
                    <p>
                        Easily view all of your call <strong>Logs</strong> in one neat table and edit the entries as you see fit! You know what's best for your sales calls after all.
                    </p>
                </div>
                <div className="LandingPage-infobars">
                    <Player
                        autoplay
                        loop
                        src="https://assets9.lottiefiles.com/private_files/lf30_4p0aandr.json"
                        style={{ height: '25%', width: '70%'}}
                    />
                    <p>
                        Generate the most used and successful <strong>Keywords</strong> with our artificial intelligence platform, and watch as your profits grow!
                    </p>
                </div>
            </ div>
        </div>
    );
}

export default LandingPage;
