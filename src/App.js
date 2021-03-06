import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;