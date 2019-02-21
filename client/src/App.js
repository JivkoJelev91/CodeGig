import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gigs from './components/Gigs'; 
import AddGig from './components/AddGig';
import Header from './components/Header';
import Home from './components/Home';

import './App.css';

class App extends Component {
  render() {
    return (
          <Router>
            <div className="App">
              <Header />
                <Route exact path="/" component={Home} />
                <Route path="/gigs" component={Gigs}  />
                <Route path="/add" component={AddGig} />
            </div>
          </Router>
    );
  }
}

export default App;
