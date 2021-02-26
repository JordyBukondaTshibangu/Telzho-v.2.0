import Home from './pages/homePage/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const  App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact >
            HOME PAGE 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
