import React from 'react';
import './AppLink.css';
import YoutubeLogo from '../../assets/youtube.jpg'
import GmailLogo from '../../assets/gmail.jpg'
import FacebookLogo from '../../assets/facebook.jpg'
import NetflixLogo from '../../assets/netflix.jpg'

const AppLink = props => {
    
    return (
        <>
            <div className="appLink__container">
                <img src={YoutubeLogo} alt="/" />
            </div>
            <div className="appLink__container">
                <img src={GmailLogo} alt="/" />
            </div>
            <div className="appLink__container">
                <img src={FacebookLogo} alt="/" />
            </div>
            <div className="appLink__container">
                <img src={NetflixLogo} alt="/" />
            </div>
        </>
    )
}

export default AppLink
