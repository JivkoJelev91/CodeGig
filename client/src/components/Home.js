import React, { Component } from 'react';
import {  Redirect } from 'react-router';
import baseUrl from '../config/baseUrl';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
            details: [],
            redirect: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(baseUrl + `search/?search=${this.state.value}`)
         .then((response)=> {
            this.setState({
                redirect: true,
                details: response.data.gig
            });
         })
         .catch(err => console.log(err));
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <section id="search" className="search-wrap">
                    <h1>Find A Coding Gig</h1>
                    <form action="/search" method="GET" className="search-form" onSubmit={this.handleSubmit}>
                        <i className="fas fa-search"></i>
                        <input type="search" name="search" 
                        placeholder="Javascript, PHP, Rails, etc..."
                        onChange={this.handleChange}/>
                        <input type="submit" value="Search"/>
                    </form>
                </section>
                <div>
                    {this.state.redirect ? 
                    <Redirect to={{
                        pathname:"/gigs", 
                        state: {
                            details: this.state.details
                        }}
                        } />
                    : null}
                </div>
            </div>
        )
    }
}

export default Home;

