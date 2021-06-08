import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homePage/Home';
import SearchPage from './pages/searchPage/SearchPage';
import Footer from './components/footer/Footer'



const  App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
