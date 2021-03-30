import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/homePage/Home';
import SearchPage from './pages/searchPage/SearchPage';
import './App.css';



const  App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
