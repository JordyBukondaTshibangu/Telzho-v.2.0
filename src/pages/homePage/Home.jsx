import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Navbar from '../../container/navbar/Navbar';
import Logo from '../../assets/logo.jpeg';
import Search from '../../components/search/Search';
import News from '../../container/news/News';
import ExternalApp from '../../container/externalApp/ExternalApp';
import UserAccount from '../../modals/userAccount/UserAccount';
import Menu from '../../modals/menu/Menu';

const Home = () => {

    const [ openUserAccountModal, setOpenUserAccountModal ] = useState(false);
    const [ openMenuModal, setOpenMenuModal ] = useState(false);

    const handleUserModal = () => { setOpenUserAccountModal(!openUserAccountModal)};
    const handleMenuModal = () => { setOpenMenuModal(!openMenuModal)};
    
    console.log(openUserAccountModal);
    return (
        <div className="home">
            <div>
                {
                    openUserAccountModal && ReactDOM.createPortal(<UserAccount />, document.getElementById('user-account-modal'))
                }
                {
                    openMenuModal && ReactDOM.createPortal(<Menu />, document.getElementById('menu-modal'))
                }
            </div>
            <div className="home__header">
                <Navbar handleUserModal={() => handleUserModal()} handleMenuModal={handleMenuModal}/>
            </div>
            <div className="home__body">
                <img src={Logo} alt="/" />
                <div className="home__inputContainer">
                    <Search />
                </div>
                <div className="home__appsContainer">
                    <ExternalApp />
                </div>
                <div className="home__newsContainer">
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Home ;