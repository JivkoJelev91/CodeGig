import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';

class Gigs extends Component {    
  constructor(props){
    super(props);
    this.state = {
        details: []
    }
  }

  componentWillReceiveProps(){
    this.setState({
       details :this.props.details
     })
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
      <div>
          <section id="gigs" className="container">
                <h1>All Gigs</h1>
                {this.state.details.map((gig,key) => {
                    return <div className="gig" key={key}>
                                <h3>{gig.title}</h3>
                                <p>{gig.description}</p>
                                <ul>
                                    <li>Budget: {gig.budget}</li>
                                    <li><a href={"mailto:" + gig.contact_email} className="btn btn-reverse">Apply Now</a></li>
                                </ul>
                                <div className="tech">
                                    <small>Technologies Needed: <span>{gig.technologies}</span></small>
                                </div>
                            </div>;
                })}
          </section>
      </div>
    )
  }
}

export default Gigs;