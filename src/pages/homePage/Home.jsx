import React from 'react';
import Search from '../../components/search/Search';
import ExternalApp from '../../container/externalApp/ExternalApp';
import Logo from '../../assets/Logo.png'
import './Home.css';


const Home = ({darkMode}) => {
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <div className="home-body">
                    <div className="logo-section">
                        {/* <h3>Telzho</h3> */}
                        <img src={Logo} alt="/" className="img-logo" width="300px" height="80px"/>
                    </div>
                    <div className="input-section">
                        <Search/>
                    </div>
                    <div className="more-section">
                        <ExternalApp/>
                    </div>
                </div>
        </div>
    )
}

export default Home;
