import React, { Component } from 'react'

function Landing() {
  return (
    <div>
         <header>
              <h2><a href="/">CodeGig</a></h2>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/gigs">All Gigs</a></li>
                  <li><a href="/gigs/add">Add Gig</a></li>
                </ul>
              </nav>
          </header>
    </div>
  )
}

export default Landing;

