import React, { Component } from 'react'
import { Link } from "react-router-dom";
import baseUrl from '../config/baseUrl';
import axios from 'axios';
import '../App.css';

class Gigs extends Component {    
  constructor(props){
    super(props);
    this.state = {
        details: []
    }

    this.h1Style = {
        textAlign: 'center',
        padding: '1em 2em 0em 1em',
        fontSize: '2em',
        color: '#000',
    };
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
               <section id="gigs" className="container">
                    <h1>All Gigs</h1>
                    {this.state.details.map((gig,key) => {
                        return <div className="gig" key={key}>
                                    <h3>{gig.title}</h3>
                                    <p>{gig.description}</p>
                                    <ul>
                                        <li>Budget: {gig.budget}</li>
                                        <li>
                                            <a href={"mailto:" + gig.contact_email} 
                                            className="btn btn-reverse">Apply Now</a>
                                        </li>
                                    </ul>
                                    <div className="tech">
                                        <small>Technologies Needed: 
                                            <span>{gig.technologies}</span>
                                        </small>
                                    </div>
                                </div>
                    })}
               </section>
           </div>
        )
    }else{
        return(
            <div>
                <section id="gigs">
                    <h1 style={this.h1Style}>No gigs available!</h1>
                    <h1 style={this.h1Style}>
                        <Link to="/" className="link">Try Again</Link>
                    </h1>
                </section>
            </div>
        )
    }
  }
}

export default Gigs;