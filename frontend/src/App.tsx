import React from 'react';
import './App.css';
import Header from './components/header/index'
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Rental from './pages/rental';

const App:React.FC = () => {
  
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>
          <Route path="/rental">
            <Rental/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
