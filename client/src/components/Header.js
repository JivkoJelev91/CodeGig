import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
         <header className="inner">
              <h2>
              <Link to="/">
                  <b className="codeTag">&lt;/&gt;</b>
                  <i className="fas fa-code"></i>CodeGig
              </Link>
               </h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/gigs">All Gigs</Link>
                  </li>
                  <li>
                    <Link to="/add">Add Gig</Link>
                  </li>   
                </ul>
              </nav>
            </header>
    </div>
  )
}
export default Header;