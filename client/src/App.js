import React from 'react';

import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Home from './Views/Home'

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/">
          <NavBar className="navContainer">
            <Home/>
          </NavBar>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
