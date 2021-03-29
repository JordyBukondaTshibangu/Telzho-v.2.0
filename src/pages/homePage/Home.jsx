import './Home.css';
import Navbar from '../../container/navbar/Navbar';
import Logo from '../../assets/logo.jpeg';
import Search from '../../components/search/Search';
import News from '../../container/news/News';
import ExternalApp from '../../container/externalApp/ExternalApp';

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