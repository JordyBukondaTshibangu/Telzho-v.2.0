import './Home.css';
import Logo from '../../assets/logo.jpeg';
import Search from '../../components/search/Search';
import AppLink from '../../components/app-links/AppLink';
import Navbar from '../../components/navbar/Navbar';
import News from '../../container/news/News';

const Home = () => {
    
    return (
        <div className="home">
            <div className="home__header">
                <Navbar />
            </div>
            <div className="home__body">
                <img src={Logo} alt="/" />
                <div className="home__inputContainer">
                    <Search />
                </div>
                <div className="home__appsContainer">
                    <AppLink />
                </div>
                <div className="home__newsContainer">
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Home ;