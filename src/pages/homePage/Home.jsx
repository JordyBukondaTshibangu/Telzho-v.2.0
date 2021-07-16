import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Home.css';
import Logo from '../../assets/logo.jpeg';
import Search from '../../components/search/Search';
import ExternalApp from '../../container/externalApp/ExternalApp';
import Footer from "../../components/footer/Footer";

// get material icons
import SettingsIcon from "@material-ui/icons/Settings";


// kjfbvkcjxbvwkxcjb


const Home = () => {
    const history = useHistory();


    // const search = event => {
    //     event.preventDefault();
    //     dispatch({
    //         type : actionTypes.SET_SEARCH_TERM,
    //         term : input
    //     })

    //     history.push(`/search?term=${input}`)
    // }

    const goSetting = event => {
        // alert("setting");
        event.preventDefault();

        history.push("/components/settings/setting");

    }


    return (
        <div className="home">
            
            <div className="home__body">

                {/* to settings page */}
                <Link to="/settings" className="home_settings_btn" >
                    <SettingsIcon className="gear_setting" />
                    <i >Settings</i>
                </Link>
                
                <img src={Logo} alt="/" />

                <div className="home__inputContainer">
                    <Search />
                </div>

                
                <div className="home__appsContainer">
                    <ExternalApp />
                </div>
            </div>


            {/* <div>
               <Footer />
            </div> */}
         </div>
          
    )
}

export default Home ;
