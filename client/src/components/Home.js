import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Search from './Search';
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
                <Search 
                submit={this.handleSubmit}
                change={this.handleChange}
                />
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

