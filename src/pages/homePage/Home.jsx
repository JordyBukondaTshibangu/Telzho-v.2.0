import React, {useState} from 'react';
import Search from '../../components/search/Search';
import ExternalApp from '../../container/externalApp/ExternalApp';
import {FaCog} from "react-icons/fa";
import './Home.css';


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={
            darkMode ? 'dark-mode' : 'light-mode'
        }>
            <div className="container">
                <div className="home-header">
                    <div className="setting-icon">
                        <FaCog className="gear-setting"/>
                    </div>
                    <div className="setting-mode">
                        <span style={{color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={ () => setDarkMode(!darkMode) }/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <span style={{  color: darkMode ? "#c96dfd" : "grey"}}>☽</span>
                    </div>
                </div>
                <div className="home-body">
                    <div className="logo-section">
                        <h3>Telzho</h3>
                    </div>
                    <div className="input-section">
                        <Search/>
                    </div>
                    <div className="more-section">
                        <ExternalApp/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
