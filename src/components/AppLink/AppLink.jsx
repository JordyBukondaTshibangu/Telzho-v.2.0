import React from 'react';
import './AppLink.css';

const AppLink = props => {

    const { text, background, logo } = props.app

    console.log(background);
    
    return (
        <div className="app-container" style={{backgroundColor : background}}>
            <h3>{text}</h3>
        </div>
    )
}

export default AppLink
