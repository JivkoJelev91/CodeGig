import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gigs from './components/Gigs'; 
import AddGig from './components/AddGig';
import Header from './components/Header';
import Home from './components/Home';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
        details: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5432/')
         .then((response)=> {
            this.setState({
                details: response.data.gigs
            });
         })
         .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={() => <Home details={this.details} />} />
            <Route path="/gigs" component={() => <Gigs details={this.details} />} />
            <Route path="/add" component={AddGig} />
        </div>
      </Router>
    );
  }
}

export default App;
