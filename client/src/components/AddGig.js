import React, { Component } from 'react';
import {  Redirect } from 'react-router';
import baseUrl from '../config/baseUrl';
import ErrorHandler from './ErrorHandler';
import axios from 'axios';
import '../App.css';

class AddGig extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      technologies: "",
      budget: "",
      description: "",
      contact_email: "",
      errorHandler: [],
      toGigs: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, technologies, budget, description, contact_email } = this.state;
    axios.post(baseUrl + 'add', {
      title: title, 
      technologies: technologies, 
      budget: budget,
      description: description,
      contact_email:  contact_email
    })
    .then((response) => {
      if(response.data.errors !== undefined){
        this.setState({
          errorHandler: response.data.errors,
          toGigs: false
        });
      }else{
        this.setState({toGigs: true});
      }
    })
    .catch((error) =>  console.log(error));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.state.toGigs) {
      return <Redirect to="/gigs" />
    }else{
      return (
        <div>
            <section id="add" className="container">
                  <div className="form-wrap">
                  <h1>Add A Gig</h1>
                  <p>Your contact email will be shared with registered users to apply to your gig</p>
                  <ErrorHandler errors={this.state.errorHandler}/>
                  <form action="/add" method="POST" onSubmit={this.handleSubmit}>
                      <div className="input-group">
                        <label htmlFor="title">Gig Title</label>
                        <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder="eg. Small Wordpress website, React developer"
                        className="input-box" 
                        maxLength="100" 
                        onChange={this.handleChange}
                        value={this.state.title}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="technologies">Technologies Needed</label>
                        <input 
                        type="text" 
                        name="technologies" 
                        id="technologies" 
                        className="input-box" 
                        placeholder="eg. javascript, react, PHP"
                        maxLength="100" 
                        onChange={this.handleChange}
                        value={this.state.technologies}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="budget">Budget (Leave blank for unknown)</label>
                        <input 
                        type="number" 
                        name="budget" 
                        id="budget" 
                        className="input-box" 
                        placeholder="eg. 500, 5000, 10000" 
                        onChange={this.handleChange}
                        value={this.state.budget}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="description">Gig Description</label>
                        <textarea 
                        name="description" 
                        id="description" 
                        className="input-box" 
                        placeholder="Describe the details of the gig" 
                        rows="10"
                        onChange={this.handleChange}
                        value={this.state.description}
                        ></textarea>
                        </div>
                      <div className="input-group">
                        <label htmlFor="contact Email">Contact Email</label>
                        <input 
                        type="email" 
                        name="contact_email" 
                        id="contactemail" 
                        className="input-box" 
                        placeholder="Enter an email" 
                        onChange={this.handleChange}
                        value={this.state.contact_email}
                        />
                      </div>
                      <input 
                      type="submit" 
                      value="Add Gig" 
                      className="btn btn-reverse"
                      />
                  </form>
                  </div>
          </section>
        </div>
      )
    }
  }
}

export default AddGig;
