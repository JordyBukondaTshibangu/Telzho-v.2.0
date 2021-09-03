import React from 'react';
import Search from '../../components/search/Search';
import ExternalApp from '../../container/externalApp/ExternalApp';
import './Home.css';


const Home = ({darkMode}) => {
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
    )
}

export default Home;
