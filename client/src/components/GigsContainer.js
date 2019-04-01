import React, { Component } from 'react'
import { Link } from "react-router-dom";
import baseUrl from '../config/baseUrl';
import axios from 'axios';
import Gigs from './Gigs';
import '../App.css';

const styles = {
    textAlign: 'center',
    padding: '1em 2em 0em 1em',
    fontSize: '2em',
    color: '#000',
};

class GigsContainer extends Component {    
  constructor(props){
    super(props);
    this.state = {
        details: []
    }
  }

  componentDidMount(){
    axios.get(baseUrl)
         .then((response)=> {
             if(this.props.location.state !== undefined){
                this.setState({
                    details:this.props.location.state.details
                });
             }else{
                this.setState({
                    details:response.data.gigs
                });
             }  
         })
         .catch(err => console.log(err));
  }

  render() {
    if(this.state.details.length !== 0){
        return (
            <div>
               <Gigs details={this.state.details} />
           </div>
        )
    }else{
        return(
            <div>
                <section id="gigs">
                    <h1 style={styles}>No gigs available!</h1>
                    <h1 style={styles}>
                        <Link to="/" className="link">Try Again</Link>
                    </h1>
                </section>
            </div>
        )
    }
  }
}

export default GigsContainer;