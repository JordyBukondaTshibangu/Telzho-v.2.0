import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button } from '@material-ui/core';
import './Home.css';
import Logo from '../../assets/logo.jpeg';
import Search from '../../components/search/Search';

const Home = props => {
    
    return (
        <div className="home">
            <div className="home__header">
                <div className="header__left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="header__right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src={Logo} alt="/" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home ;